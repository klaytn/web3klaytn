import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

filterId = "0xb"

sdk = OpenSDK(host)
eth_response = sdk.eth.uninstall_filter(filterId)

print(json.loads(eth_response.response.data))
