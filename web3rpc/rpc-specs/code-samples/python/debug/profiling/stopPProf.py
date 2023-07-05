import json
from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

w3 = Web3(Web3.HTTPProvider(host))
debug_response = w3.debug.stop_p_prof()

print(json.loads(debug_response.response.data))
