import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
admin_response = sdk.admin.spam_throttler_config()

print(json.loads(admin_response.response.data))
