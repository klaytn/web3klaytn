from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

address = "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec"
message = "0xdeadbeaf"

w3 = Web3(Web3.HTTPProvider(host))
eth_response = w3.eth.sign(address, message)

print(eth_response)
