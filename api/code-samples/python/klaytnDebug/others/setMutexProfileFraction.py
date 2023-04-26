import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

number = 2

sdk = OpenSDK(host)
debug_response = sdk.debug.set_mutex_profile_fraction(number)

print(json.loads(debug_response.response.data))
