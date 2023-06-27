from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

url = "url"
path = "path"
pin = True

w3 = Web3(Web3.HTTPProvider(host))
personal_response = w3.personal.derive_account(url, path, pin)

print(personal_response)
