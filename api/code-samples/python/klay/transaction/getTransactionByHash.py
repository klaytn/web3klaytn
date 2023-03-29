import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

transactionHash = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_transaction_by_hash(transactionHash)

print(json.loads(klay_response.response.data))
