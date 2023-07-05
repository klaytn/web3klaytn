from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

limit = 5

w3 = Web3(Web3.HTTPProvider(host))
admin_response = w3.admin.set_max_subscription_per_ws_conn(limit)

print(admin_response)
