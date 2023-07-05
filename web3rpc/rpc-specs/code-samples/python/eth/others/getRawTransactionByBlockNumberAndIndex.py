from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

blockNumber = 118593751
index = "0x0"

w3 = Web3(Web3.HTTPProvider(host))
eth_response = w3.eth.get_raw_transaction_by_block_number_and_index(blockNumber, index)

print(eth_response)
