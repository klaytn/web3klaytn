import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

fileName = "cpu.profile"

sdk = OpenSDK(host)
debug_response = sdk.debug.start_cpu_profile(fileName)

print(json.loads(debug_response.response.data))
