from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

module = "p2p=4"

w3 = Web3(Web3.HTTPProvider(host))
debug_response = w3.debug.vmodule(module)

print(debug_response)
