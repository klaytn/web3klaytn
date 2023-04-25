import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6"

sdk = OpenSDK(host)
debug_response = sdk.debug.standard_trace_bad_block_to_file(blockHash)

print(json.loads(debug_response.response.data))
