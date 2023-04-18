import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

fileName = "mem.profile"

sdk = OpenSDK(host)
debug_response = sdk.debug.write_mem_profile(fileName)

print(json.loads(debug_response.response.data))
