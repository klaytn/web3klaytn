import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

percent = 100

sdk = OpenSDK(host)
debug_response = sdk.debug.set_gc_percent(percent)

print(json.loads(debug_response.response.data))
