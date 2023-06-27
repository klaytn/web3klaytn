from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

address = "0xa4f42d4d2a3a13874406435500950c9bf2d783db"
blockTag = "latest"

w3 = Web3(Web3.HTTPProvider(host))
klay_response = w3.klay.account_created(address, blockTag)

print(klay_response)
