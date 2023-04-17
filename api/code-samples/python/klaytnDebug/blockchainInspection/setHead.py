import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

number = "0x100"

sdk = OpenSDK(host)
debug_response = sdk.debug.set_head(number)

print(json.loads(debug_response.response.data))
