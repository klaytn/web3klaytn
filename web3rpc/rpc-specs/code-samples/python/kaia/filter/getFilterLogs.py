from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

quantity = "0x16"

w3 = Web3(Web3.HTTPProvider(host))
kaia_response = w3.kaia.get_filter_logs(quantity)

print(kaia_response)
