import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_transaction_by_hash(blockHash)

print(json.loads(eth_response.response.data))
