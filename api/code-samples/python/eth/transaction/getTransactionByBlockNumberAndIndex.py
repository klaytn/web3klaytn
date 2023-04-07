import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = "0x27"
transactionIndex = "0x0"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_transaction_by_block_number_and_index(blockTag, transactionIndex)

print(json.loads(eth_response.response.data))
