from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

passphrase = "helloWorld"

w3 = Web3(Web3.HTTPProvider(host))
personal_response = w3.personal.new_account(passphrase)

print(personal_response)
