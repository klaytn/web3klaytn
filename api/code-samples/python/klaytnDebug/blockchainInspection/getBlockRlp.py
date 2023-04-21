import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "latest"

sdk = OpenSDK(host)
debug_response = sdk.debug.get_block_rlp(blockHash)

print(json.loads(debug_response.response.data))
