import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = "0xe8"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_uncle_count_by_block_number(blockTag)

print(json.loads(eth_response.response.data))
