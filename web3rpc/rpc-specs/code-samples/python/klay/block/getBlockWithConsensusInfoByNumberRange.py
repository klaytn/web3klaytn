from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

blockHash = 1
numberRange = 10

w3 = Web3(Web3.HTTPProvider(host))
klay_response = w3.klay.get_block_with_consensus_info_by_number_range(blockHash, numberRange)

print(klay_response)
