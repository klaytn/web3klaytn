import json
import copy
from typing import (
    Collection, Dict, Union, Callable, Any
)
from web3 import Web3
from web3.module import Module
from web3.method import (
    Method, default_root_munger,
)
from eth_account.signers.local import LocalAccount
from eth_utils.address import (
    is_same_address,
    to_checksum_address,
)
from eth_typing.encoding import HexStr
from web3py_ext.klaytn_account.utils import (
    compressed_key,
    address_from_private_key,
    compressed_key_and_address_from_xy,
)

# Account key type in klaytn
ACCOUNT_KEY_NIL = 0
ACCOUNT_KEY_LEGACY = 1
ACCOUNT_KEY_PUBLIC = 2
ACCOUNT_KEY_FAIL = 3
ACCOUNT_KEY_WEIGHTED_MULTISIG = 4
ACCOUNT_KEY_ROLE_BASED = 5
ACCOUNT_KEY_CONTRACT = 6

# Reserve role type in role based key
ROLE_TRANSACTION_KEY = 0
ROLE_ACCOUNT_UPDATE_KEY = 1
ROLE_FEE_PAYER_KEY = 2
ROLE_LAST = 3

# Maximum key number in multisig/rolebased
MAXIMUM_KEY_NUM = 10

class AccountStore:
    def __init__(self):
        self.account_store = {}

    def _add(self, address, accountInfo):
        if not Web3.is_address(address):
            return False
        if not self._validate_key(accountInfo['key']):
            return False
        checksum_address = to_checksum_address(address)
        accountInfo['address'] = checksum_address 
        self.account_store[checksum_address] = accountInfo
        return True

    def _validate_key(self, keyring):
        return True
    
    def _is_in_account_store(self, address):
        if address in self.account_store:
            return True
        return False

    def _remove(self, address):
        if self._is_in_account_store(address):
            self.account_store.pop(address)

    def _is_decoupled(self, account):
        extracted_address = address_from_private_key(account)
        if is_same_address(account.address, extracted_address):
            return False
        else:
            return True

    def _copy_key(self, account_key, key_data):
        copied_account_key = copy.deepcopy(account_key)
        if copied_account_key['type'] == ACCOUNT_KEY_LEGACY:
            copied_account_key['pubkey'] = {}
        elif copied_account_key['type'] == ACCOUNT_KEY_PUBLIC:
            pubkey, address = compressed_key_and_address_from_xy(key_data['key']['x'], key_data['key']['y'])
            copied_account_key['pubkey'] = {
                'compressed': pubkey,
                'hashed': address
            }
        elif copied_account_key['type'] == ACCOUNT_KEY_WEIGHTED_MULTISIG:
            copied_account_key['threshold'] = key_data['key']['threshold']
            for multi_key in key_data['key']['keys']:
                pubkey, address = compressed_key_and_address_from_xy(multi_key['key']['x'], multi_key['key']['y'])
                copied_account_key['keys'].append({
                    'weight':multi_key['weight'],
                    'pubkey': {
                        'compressed': pubkey,
                        'hashed': address
                    }
                })
        elif copied_account_key['type'] == ACCOUNT_KEY_ROLE_BASED:
            roleTransactionKey = self._copy_key(self._empty_accoount(key_data['key'][0]["keyType"])['key'], key_data['key'][0])
            roleAccountUpdateKey = self._copy_key(self._empty_accoount(key_data['key'][1]["keyType"])['key'], key_data['key'][1])
            roleFeePayerKey = self._copy_key(self._empty_accoount(key_data['key'][2]["keyType"])['key'], key_data['key'][2])
            copied_account_key['keys']['roleTransactionKey'] = roleTransactionKey
            copied_account_key['keys']['roleAccountUpdateKey'] = roleAccountUpdateKey
            copied_account_key['keys']['roleFeePayerKey'] = roleFeePayerKey
        return copied_account_key

    def _copy_account_data(self, klay, account):
        acc_data = klay.get_account(account.address, 'latest')
        if acc_data is not None:
            acc = self._empty_accoount(acc_data['account']['key']['keyType'])
            acc['nonce'] = acc_data['account']['nonce']
            acc['balance'] = acc_data['account']['balance']
            acc['key'] = self._copy_key(acc['key'], acc_data['account']['key'])
            return acc
        return None

    def __insert_has_key(self, key, account):
        if 'type' in key and (key['type'] == ACCOUNT_KEY_LEGACY or key['type'] == ACCOUNT_KEY_FAIL):
            return key
        
        copied_key = copy.deepcopy(key)
        if 'weight' in key or key['type'] == ACCOUNT_KEY_PUBLIC:
            is_same = key['pubkey']['compressed'] == compressed_key(account)
            if 'hasPrivateKey' in copied_key['pubkey']:
                before = copied_key['pubkey']['hasPrivateKey']
                copied_key['pubkey']['hasPrivateKey'] = is_same or before
            else:
                copied_key['pubkey']['hasPrivateKey'] = is_same
        elif copied_key['type'] == ACCOUNT_KEY_WEIGHTED_MULTISIG:
            for i in range(len(key['keys'])):
                copied_key['keys'][i] = self.__insert_has_key(key['keys'][i], account)
        elif copied_key['type'] == ACCOUNT_KEY_ROLE_BASED:
            copied_key['keys']['roleTransactionKey'] = self.__insert_has_key(key['keys']['roleTransactionKey'], account)
            copied_key['keys']['roleAccountUpdateKey'] = self.__insert_has_key(key['keys']['roleAccountUpdateKey'], account)
            copied_key['keys']['roleFeePayerKey'] = self.__insert_has_key(key['keys']['roleFeePayerKey'], account)

        return copied_key

    def _insert_has_key(self, account):
        for address in self.account_store.keys():
            self.account_store[address]['key'] = self.__insert_has_key(self.account_store[address]['key'], account)

    def refresh(self, provider:Web3, accounts: Collection[LocalAccount]):
        klay_provider = DefaultKlayProvider(provider) if not hasattr(provider, 'klay') else provider.klay
        # local account - only cover legacy type in this case
        # supposed that only legacy type can be created locally through the sdk.
        for account in accounts:
            if not self._is_decoupled(account):
                acc = self._empty_accoount(ACCOUNT_KEY_LEGACY)
                self._add(account.address, acc)
        # remote account - pubkey/multisig/role-based/fail
        # override local account if the account is updated in remote
        for account in accounts:
            acc = self._copy_account_data(klay_provider, account)
            if acc is not None:
                acc['address'] = account.address
                self._add(account.address, acc)
        for account in accounts:
            # make hasPrivateKey field
            self._insert_has_key(account)
        
    def get_type(self, address):
        checksum_address = to_checksum_address(address)
        if self._is_in_account_store(checksum_address):
            return self.account_store[checksum_address]['key']['type']

    def get_account_info(self, address:HexStr):
        if self._is_in_account_store(address):
            account = copy.deepcopy(self.account_store[address])
            account['address'] = address
            return account
    
    def get_account_infos(self):
        account_infos = copy.deepcopy(self.account_store)
        return account_infos

    # Generate empty keyring case
    # You can use it for AccountUpdateTransaction after adding/appending keys according to the key types
    def _empty_accoount(self, account_type):
        if account_type == ACCOUNT_KEY_NIL:
            return {}
        elif account_type == ACCOUNT_KEY_FAIL:
            return {'type' : ACCOUNT_KEY_FAIL}
        elif account_type == ACCOUNT_KEY_LEGACY:
            return {
                'address':None,
                'nonce':0,
                'balance':0,
                'key':{
                    'type':ACCOUNT_KEY_LEGACY,
                    'pubkey':{}
                }
            }
        elif account_type == ACCOUNT_KEY_PUBLIC:
            return {
                'address':None,
                'nonce':0,
                'balance':0,
                'key':{
                    'type':ACCOUNT_KEY_PUBLIC,
                    'pubkey': None
                }
            }
        elif account_type == ACCOUNT_KEY_WEIGHTED_MULTISIG:
            return {
                'address':None,
                'nonce':0,
                'balance':0,
                'key':{
                    'type': ACCOUNT_KEY_WEIGHTED_MULTISIG,
                    'threshold':0,
                    'keys' : []
                }
            }
        elif account_type == ACCOUNT_KEY_ROLE_BASED:
            return {
                'address':None,
                'nonce':0,
                'balance':0,
                'key':{
                    'type' : ACCOUNT_KEY_ROLE_BASED,
                    'keys' : {
                        'roleTransactionKey' : {},
                        'roleAccountUpdateKey' : {},
                        'roleFeePayerKey' : {}
                    }
                }
            }
        elif account_type == ACCOUNT_KEY_CONTRACT:
            {
                'address':None,
                'nonce':0,
                'balance':0,
                'key':{
                    'type': ACCOUNT_KEY_CONTRACT,
                    'pubkey' : {}
                }
            }

    def verify_transaction(self, provider:Web3, transaction: Dict[str,Any]):
        pass

    def verify_message(self, provider:Web3, msg: str):
        pass

class DefaultKlayProvider(Module):
    _get_account: Method[Callable[..., Any]] = Method(
        "klay_getAccount", mungers=[default_root_munger]
    )
    def get_account(self, *args) -> Any:
        return self._get_account(*args)