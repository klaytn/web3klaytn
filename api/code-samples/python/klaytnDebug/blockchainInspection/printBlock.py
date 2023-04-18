import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockNumber = "0x80"

sdk = OpenSDK(host)
debug_response = sdk.debug.print_block(blockNumber)

print(json.loads(debug_response.response.data))
