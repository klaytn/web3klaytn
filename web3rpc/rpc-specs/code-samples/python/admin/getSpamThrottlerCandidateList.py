from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

w3 = Web3(Web3.HTTPProvider(host))
admin_response = w3.geth.admin.get_spam_throttler_candidate_list()

print(admin_response)
