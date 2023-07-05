from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

blockNumber = "0xe8"

w3 = Web3(Web3.HTTPProvider(host))
eth_response = w3.eth.get_block_transaction_count_by_number(blockNumber)

print(eth_response)
