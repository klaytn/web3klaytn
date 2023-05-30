import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

rate = 4

sdk = OpenSDK(host)
debug_response = sdk.debug.set_block_profile_rate(rate)

print(json.loads(debug_response.response.data))
