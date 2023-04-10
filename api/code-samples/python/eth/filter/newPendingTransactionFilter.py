import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
eth_response = sdk.eth.new_pending_transaction_filter()

print(json.loads(eth_response.response.data))
