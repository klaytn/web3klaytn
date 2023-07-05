from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

key = "governance.governancemode"
value = "ballot"

w3 = Web3(Web3.HTTPProvider(host))
governance_response = w3.governance.vote(key, value)

print(governance_response)
