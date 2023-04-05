import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

hashData = "0x11223344"

sdk = OpenSDK(host)
klay_response = sdk.klay.sha3(hashData)

print(json.loads(klay_response.response.data))
