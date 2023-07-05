from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

address = "0xfa415bb3e6231f488ff39eb2897db0ef3636dd32"
passphrase = "helloWorld"
duration = 30

w3 = Web3(Web3.HTTPProvider(host))
personal_response = w3.personal.unlock_account(address, passphrase, duration)

print(personal_response)
