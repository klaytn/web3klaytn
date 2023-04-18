import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
governance_response = sdk.governance.node_address()

print(json.loads(governance_response.response.data))
