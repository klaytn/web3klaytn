from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

filterId = "0xb"

w3 = Web3(Web3.HTTPProvider(host))
eth_response = w3.eth.uninstall_filter(filterId)

print(eth_response)
