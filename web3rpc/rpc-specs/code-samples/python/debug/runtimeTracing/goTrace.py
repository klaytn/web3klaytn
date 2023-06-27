from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

fileName = "go.trace"
seconds = 5

w3 = Web3(Web3.HTTPProvider(host))
debug_response = w3.debug.go_trace(fileName, seconds)

print(debug_response)
