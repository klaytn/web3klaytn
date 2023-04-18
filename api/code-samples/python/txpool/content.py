import json
from opensdk.sdk import OpenSDK

host = "https://dev.api.klaytn.sotatek.works"

sdk = OpenSDK(host)
txpool_response = sdk.txpool.status()

print(json.loads(txpool_response.response.data))
