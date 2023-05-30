import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "localhost"
port = 6060

sdk = OpenSDK(host)
debug_response = sdk.debug.start_p_prof(address, port)

print(json.loads(debug_response.response.data))
