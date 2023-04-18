import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

file = "cpu.profile"

sdk = OpenSDK(host)
debug_response = sdk.debug.start_cpu_profile(file)

print(json.loads(debug_response.response.data))
