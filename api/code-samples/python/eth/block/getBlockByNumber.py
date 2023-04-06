import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blochTag = "0xd0054e"
boolean = False

sdk = OpenSDK(host)
eth_response = sdk.eth.get_block_by_number(blochTag, boolean)

print(json.loads(eth_response.response.data))
