import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
debug_response = sdk.debug.free_os_memory()

print(json.loads(debug_response.response.data))
