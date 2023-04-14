import json
from opensdk.sdk import OpenSDK

host = "https://dev.api.klaytn.sotatek.works"

sdk = OpenSDK(host)
personal_response = sdk.personal.list_wallets()

print(json.loads(personal_response.response.data))
