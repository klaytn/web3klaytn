import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blochHash = "0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c"
transactionObject = True

sdk = OpenSDK(host)
eth_response = sdk.eth.get_block_by_hash(blochHash, transactionObject)

print(json.loads(eth_response.response.data))
