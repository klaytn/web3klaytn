import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

hash = "0x29b6cd965c7d9a53a6f068da259dce1d3810ba79fff8eebac5d4da14754e67e6"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_raw_transaction_by_hash(hash)

print(json.loads(klay_response.response.data))