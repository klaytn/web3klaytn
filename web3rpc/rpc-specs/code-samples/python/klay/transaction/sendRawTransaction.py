from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

singedTransactionData = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"

w3 = Web3(Web3.HTTPProvider(host))
klay_response = w3.klay.send_raw_transaction(singedTransactionData)

print(klay_response)
