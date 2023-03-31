import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0x29b6cd965c7d9a53a6f068da259dce1d3810ba79fff8eebac5d4da14754e67e6"
index = "0x20965255"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_raw_transaction_by_block_hash_and_index(blockHash, index)

print(json.loads(klay_response.response.data))