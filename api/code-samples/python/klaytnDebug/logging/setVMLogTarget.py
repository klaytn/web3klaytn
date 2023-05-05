import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

target = 3

sdk = OpenSDK(host)
debug_response = sdk.debug.set_vm_log_target(target)

print(json.loads(debug_response.response.data))
