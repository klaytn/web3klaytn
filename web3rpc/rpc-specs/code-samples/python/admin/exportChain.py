from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

fileName = "/tmp/chain.txt"

w3 = Web3(Web3.HTTPProvider(host))
admin_response = w3.admin.export_chain(fileName)

print(admin_response)
