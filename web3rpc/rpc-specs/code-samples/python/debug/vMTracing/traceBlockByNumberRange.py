from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

startBlock = 21
endBlock = 22

w3 = Web3(Web3.HTTPProvider(host))
debug_response = w3.debug.trace_block_by_number_range(startBlock, endBlock)

print(debug_response)
