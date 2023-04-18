import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

file = "mem.profile"

sdk = OpenSDK(host)
debug_response = sdk.debug.write_mem_profile(file)

print(json.loads(debug_response.response.data))
