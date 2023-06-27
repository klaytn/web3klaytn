from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

number = 21

w3 = Web3(Web3.HTTPProvider(host))
debug_response = w3.debug.trace_block_by_number(number)

print(debug_response)
