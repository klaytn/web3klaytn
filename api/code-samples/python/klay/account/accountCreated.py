import json

from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0xa4f42d4d2a3a13874406435500950c9bf2d783db"
blockTag = "latest"

sdk = OpenSDK(host)
klay_response = sdk.klay.account_created(address, blockTag)

print(json.loads(klay_response.response.data))
