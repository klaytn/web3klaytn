from web3py_ext import extend
from web3 import Web3
from web3py_ext.utils.klaytn_utils import to_pretty
from web3py_ext.klaytn_account import account_key

def multisig_rlp_encode_decode():
    multisig_key = {
        'type': 4,
        'threshold': 2,
        'keys': [
            {
                'weight':1,
                'key': '0x031bbf1d8d04d4dd7fd2bdba4c006247be50ed48e9c53ff7b4891b7e5e1bcc85c6',
            },
            {
                'weight':1,
                'key': '0x039bc04ad051a4f0d57d0f0c8a3079e5b12dd1849d1052f8526b2c73e9e518eee6',
            },
            {
                'weight':1,
                'key': '0x029c329fc5db2714c1a49fec3e7e46ecd9705fe57bd6a110377f252788610db7e1',
            },
        ]
    }
    encoded_multisig_account_key = account_key.AccountKey.serialize(multisig_key)
    print(encoded_multisig_account_key.hex())
    decoded_multisig_account_key = account_key.AccountKey.deserialize(encoded_multisig_account_key)
    print(to_pretty(decoded_multisig_account_key))

multisig_rlp_encode_decode()