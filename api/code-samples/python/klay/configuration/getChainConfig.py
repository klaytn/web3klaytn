import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = 100

sdk = OpenSDK(host)
klay_response = sdk.klay.get_chain_config()

print(json.loads(klay_response.response.data))