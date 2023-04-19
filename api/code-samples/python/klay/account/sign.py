import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"
message = "0xdeadbeaf"

sdk = OpenSDK(host)
klay_response = sdk.klay.sign(address, message)

print(json.loads(klay_response.response.data))
