import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

filterOptions = {
    "fromBlock": "latest",
    "toBlock": "latest",
    "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b"
}

sdk = OpenSDK(host)
eth_response = sdk.eth.get_logs(filterOptions)

print(json.loads(eth_response.response.data))
