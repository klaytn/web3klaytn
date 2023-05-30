import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
debug_response = sdk.debug.stop_p_prof()

print(json.loads(debug_response.response.data))
