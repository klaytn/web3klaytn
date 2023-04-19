import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec"
message = "0xdeadbeaf"

sdk = OpenSDK(host)
eth_response = sdk.eth.sign(address, message)

print(json.loads(eth_response.response.data))
