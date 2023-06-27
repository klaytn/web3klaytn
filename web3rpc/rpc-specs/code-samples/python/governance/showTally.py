from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

w3 = Web3(Web3.HTTPProvider(host))
governance_response = w3.governance.show_tally()

print(governance_response)
