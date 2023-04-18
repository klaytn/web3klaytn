import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

fileName = "go.trace"

sdk = OpenSDK(host)
debug_response = sdk.debug.start_go_trace(fileName)

print(json.loads(debug_response.response.data))
