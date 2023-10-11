from web3py_ext import extend
from eth_account import Account

with open('keystore') as f:
    pk = Account.v4_decrypt(f.read(), "Klaytn")
    accs = list(map(lambda acc: Account.from_key_pair(acc['address'], acc['private_key']), pk))
    for acc in accs:
        print(acc.address, acc.key.hex())