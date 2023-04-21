import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

raw = True

sdk = OpenSDK(host)
debug_response = sdk.debug.metrics(raw)

print(json.loads(debug_response.response.data))
