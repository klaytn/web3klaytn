import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0xed110b330152df2022d40fa3c38987643034aa56fc96079fb6c67b66a6ed4f19"

sdk = OpenSDK(host)
debug_response = sdk.debug.trace_block_by_hash(blockHash)

print(json.loads(debug_response.response.data))
