from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

startBlockNum = 171904
endBlockNum = 172160

w3 = Web3(Web3.HTTPProvider(host))
debug_response = w3.debug.get_modified_accounts_by_number(startBlockNum, endBlockNum)

print(debug_response)
