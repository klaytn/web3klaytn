import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

file = "go.trace"
seconds = 5

sdk = OpenSDK(host)
debug_response = sdk.debug.go_trace(file, seconds)

print(json.loads(debug_response.response.data))
