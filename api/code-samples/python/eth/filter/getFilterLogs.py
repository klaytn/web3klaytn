import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

quantity = "0x11b5f0ef802c98569efa8459cf063ed5"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_filter_logs(quantity)

print(json.loads(eth_response.response.data))
