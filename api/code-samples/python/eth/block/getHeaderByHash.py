import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_header_by_hash(blockHash)

print(json.loads(eth_response.response.data))
