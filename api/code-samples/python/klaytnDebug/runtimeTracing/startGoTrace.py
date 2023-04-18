import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

file = "go.trace"

sdk = OpenSDK(host)
debug_response = sdk.debug.start_go_trace(file)

print(json.loads(debug_response.response.data))
