import json
from opensdk.sdk import OpenSDK

host = "https://dev.api.klaytn.sotatek.works"

sdk = OpenSDK(host)
personal_response = sdk.personal.list_accounts()

print(json.loads(personal_response.response.data))
