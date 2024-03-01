#-*- coding:utf-8 -*-
from web3py_ext import extend
from web3py_ext.utils.klaytn_utils import to_pretty
from web3py_ext.klaytn_account import account_key

def role_based_rlp_encode_decode():
    role_based_account_key = {
        "type": account_key.KeyType.ROLE_BASED,
        "keys": {
            "roleTransactionKey": {
                "type": account_key.KeyType.MULTISIG,
                "threshold": 1,
                "keys": [
                    {
                        "weight": 1,
                        "key": "0x0375f19db17ee6d150e34f4b67329beb9665b2ff2d6202fec8d3b8f5f08e824429"
                    },
                ]
            },
            "roleAccountUpdateKey": {
                "type": account_key.KeyType.MULTISIG,
                "threshold": 1,
                "keys": [
                    {
                        "weight": 1,
                        "key": "0x03de9329ba44a8529415c8f9a103194c9bda193d53ddd9173fa46d320fb226c361"
                    },
                ]
            },
            "roleFeePayerKey": {
                "type": account_key.KeyType.MULTISIG,
                "threshold": 1,
                "keys": [
                    {
                        "weight": 1,
                        "key": "0x039c8ba54b69161ec54d1005eab16b60259eb5b9647674f7b215f8f336604e0c3c"
                    },
                ]
            }
        }
    }

    encoded_role_based_account_key = account_key.AccountKey.serialize(role_based_account_key)
    print(encoded_role_based_account_key.hex())
    decoded_role_based_account_key = account_key.AccountKey.deserialize(encoded_role_based_account_key)
    print(to_pretty(decoded_role_based_account_key))

role_based_rlp_encode_decode()