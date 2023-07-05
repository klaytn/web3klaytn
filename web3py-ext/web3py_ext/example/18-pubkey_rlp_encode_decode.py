from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3py_ext.klaytn_account.utils import compressed_key
from web3py_ext.utils.klaytn_utils import to_pretty
from web3py_ext.klaytn_account import account_key

def pubkey_rlp_encode_decode():
    user1 = Account.from_key('0x8234bdf5e900c9e43401399ae3836340f31dcff52843baf8432f06cca9e3f396')
    pubkey = {
        'type': 2,
        'key' : compressed_key(user1)
    }
    encoded_pubkey_account_key = account_key.AccountKey.serialize(pubkey)
    print(encoded_pubkey_account_key.hex())
    decoded_pubkey_account_key = account_key.AccountKey.deserialize(encoded_pubkey_account_key)
    print(to_pretty(decoded_pubkey_account_key))

pubkey_rlp_encode_decode()