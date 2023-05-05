import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"

sdk = OpenSDK(host)
debug_response = sdk.debug.start_contract_warm_up(address)

print(json.loads(debug_response.response.data))
