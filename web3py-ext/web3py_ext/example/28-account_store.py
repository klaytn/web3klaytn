from web3py_ext import extend
from web3py_ext.klaytn_account.account_store import AccountStore
from eth_account import Account
from web3py_ext.utils.klaytn_utils import to_pretty
from web3 import Web3

w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8551'))
# w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))
acc_list = [
    Account.from_key('0xd3973803956f7f08093097fa2c3712f5700c5c58f6d91d79b279a919bb120cc2'),
    Account.from_key('0x8b0164c3a59d2b1a00a9934f85ae77c14e21094132c34cc3daacd9e632c90807'),
    Account.from_key('0x2380a434b66b5b3ff095632b098055e52fa85ca34517ff8ec504b428f4a81f76'),
    Account.from_key_pair(
        '0xe98f6F03Ab697A2dF8cf623d17FbC758dc351386',
        '0x2300c0255fbe8cee1392db4c93d6059ca88a7453ee1bb1a67ef1b1ccfa11932b'
    ),
    Account.from_key('0x4b465299726dc1cc1831c85aad1877d319b6c595f22c0cbef50cc98bdc694854'),
    Account.from_key('0xedb106f1dcd74b7fb55252051359b5b162f93de0fb8b5aa0c46319f864192c29'),
    Account.from_key('0x4632405c32c4ea8244ce88380446ffae6d737b3de58e1d303d77fc4397219caa')
]

def account_store_test():
    for acc in acc_list:
        print(acc.address, acc.key.hex())
    a = AccountStore()
    a.refresh(w3, acc_list)
    print(to_pretty(a.get_account_infos()))

account_store_test()