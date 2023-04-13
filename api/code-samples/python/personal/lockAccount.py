import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0xfa415bb3e6231f488ff39eb2897db0ef3636dd32"

sdk = OpenSDK(host)
personal_response = sdk.personal.lock_account(address)

print(json.loads(personal_response.response.data))
