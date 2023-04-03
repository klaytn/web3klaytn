import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = "0x1b4"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_header_by_number(blockTag)

print(json.loads(klay_response.response.data))
