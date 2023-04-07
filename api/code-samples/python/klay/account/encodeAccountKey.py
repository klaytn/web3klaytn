import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

accountKey = {
    "keyType": 0,
    "key": {}
}

sdk = OpenSDK(host)
klay_response = sdk.klay.encode_account_key(accountKey)

print(json.loads(klay_response.response.data))
