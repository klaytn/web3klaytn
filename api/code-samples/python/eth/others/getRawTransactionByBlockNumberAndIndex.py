import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockNumber = 118593751
index = "0x0"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_raw_transaction_by_block_number_and_index(blockNumber, index)

print(json.loads(eth_response.response.data))
