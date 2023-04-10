import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

nonce = "0x0000000000000001"
powHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
mixDigest = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

sdk = OpenSDK(host)
eth_response = sdk.eth.submit_work(nonce, powHash, mixDigest)

print(json.loads(eth_response.response.data))
