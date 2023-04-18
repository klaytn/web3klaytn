import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
txpool_response = sdk.txpool.inspect()

print(json.loads(txpool_response.response.data))
