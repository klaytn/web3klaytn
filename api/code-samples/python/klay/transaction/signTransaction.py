import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

transactionObject = {
    "from": "0x487f2dfef230c2120b8cc55c5087b103146536ec",
    "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
    "value": "0x1",
    "gas": "0x9999",
    "nonce": "0x1"
}

sdk = OpenSDK(host)
klay_response = sdk.klay.sign_transaction(transactionObject)

print(json.loads(klay_response.response.data))