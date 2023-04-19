import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0xfa415bb3e6231f488ff39eb2897db0ef3636dd32"
passphrase = "helloWorld"
duration = 30

sdk = OpenSDK(host)
personal_response = sdk.personal.unlock_account(address, passphrase, duration)

print(json.loads(personal_response.response.data))
