from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

hashData = "0x11223344"

w3 = Web3(Web3.HTTPProvider(host))
klay_response = w3.klay.sha3(hashData)

print(klay_response)
