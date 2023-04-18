import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = 0

sdk = OpenSDK(host)
governance_response = sdk.governance.items_at(blockTag)

print(json.loads(governance_response.response.data))
