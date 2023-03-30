import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722"
blockTag = "latest"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_balance(address, blockTag)

print(json.loads(klay_response.response.data))
