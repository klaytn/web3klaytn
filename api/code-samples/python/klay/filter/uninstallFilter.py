import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

quantity = "0xd32fd16b6906e67f6e2b65dcf48fc272"

sdk = OpenSDK(host)
klay_response = sdk.klay.uninstall_filter(quantity)

print(json.loads(klay_response.response.data))
