from eth_account import Account
from web3py_ext.transaction.extended_transaction_utils import (
    bytes_to_hex_str,
)
from eth_utils.hexadecimal import (
    remove_0x_prefix,
)
from eth_keys.datatypes import PublicKey

def compressed_key(account: Account) -> str:
    acc = Account.from_key(account.key)
    return '0x' + bytes_to_hex_str(acc._key_obj.public_key.to_compressed_bytes())

def address_from_private_key(private_key: Account) -> str:
    return private_key._key_obj.public_key.to_address()

def compressed_key_from_xy(x,y):
    nomalize = lambda x: '0'*(64 - len(x)) + x if len(x) < 64 else x
    nx = nomalize(remove_0x_prefix(x))
    ny = nomalize(remove_0x_prefix(y))
    return PublicKey(bytes.fromhex(nx + ny)).to_compressed_bytes().hex()

def compressed_key_and_address_from_xy(x,y):
    nomalize = lambda x: '0'*(64 - len(x)) + x if len(x) < 64 else x
    nx = nomalize(remove_0x_prefix(x))
    ny = nomalize(remove_0x_prefix(y))
    pubkey = PublicKey(bytes.fromhex(nx + ny))
    return '0x'+pubkey.to_compressed_bytes().hex(), pubkey.to_checksum_address()