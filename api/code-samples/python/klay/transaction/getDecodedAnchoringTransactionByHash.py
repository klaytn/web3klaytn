import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

hashOfTransaction = "0x72cde80650c7c6745e4cf4c162e9ce1e5542f4d86112925faa6aa75f6a6142ec"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_decoded_anchoring_transaction_by_hash(hashOfTransaction)

print(json.loads(klay_response.response.data))
