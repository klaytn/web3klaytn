from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

blockHash = "latest"

w3 = Web3(Web3.HTTPProvider(host))
debug_response = w3.debug.get_block_rlp(blockHash)

print(debug_response)
