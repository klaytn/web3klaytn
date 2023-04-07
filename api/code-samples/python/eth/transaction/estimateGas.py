import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

callObject = {
    "from": "0x51239f87c33e95e3bdb72e31d06b5306bcec81cc",
    "to": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
    "gas": "0x100000",
    "gasPrice": "0x5d21dba00",
    "value": "0x0",
    "input": "0x8ada066e"
}

sdk = OpenSDK(host)
eth_response = sdk.eth.estimate_gas(callObject)

print(json.loads(eth_response.response.data))