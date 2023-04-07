import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0x0c11803ab36110db993e7520908b9ba9336cca2f2dcc9b6130c481a3ccdc2621"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_block_transaction_count_by_hash(blockHash)

print(json.loads(eth_response.response.data))
