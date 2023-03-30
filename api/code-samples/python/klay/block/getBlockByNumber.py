import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = "0x1b4"
boolean = True

sdk = OpenSDK(host)
klay_response = sdk.klay.get_block_by_number(blockTag, boolean)

print(json.loads(klay_response.response.data))
