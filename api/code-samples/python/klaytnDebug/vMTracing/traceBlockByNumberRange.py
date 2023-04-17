import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

startBlock = 21
endBlock = 22

sdk = OpenSDK(host)
debug_response = sdk.debug.trace_block_by_number_range(startBlock, endBlock)

print(json.loads(debug_response.response.data))
