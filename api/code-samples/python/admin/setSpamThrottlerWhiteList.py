import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = ["0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5"]

sdk = OpenSDK(host)
admin_response = sdk.admin.set_spam_throttler_white_list(address)

print(json.loads(admin_response.response.data))
