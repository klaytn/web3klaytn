import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockNumber = 0

sdk = OpenSDK(host)
governance_response = sdk.governance.item_cache_from_db(blockNumber)

print(json.loads(governance_response.response.data))
