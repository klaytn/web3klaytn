import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
governance_response = sdk.governance.idx_cache_from_db()

print(json.loads(governance_response.response.data))
