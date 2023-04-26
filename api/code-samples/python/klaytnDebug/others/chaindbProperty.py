import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

string = "0xe17d821e9a8a8736b9aea8c2de1f3a4934ac0a2f"

sdk = OpenSDK(host)
debug_response = sdk.debug.chaindb_property(string)

print(json.loads(debug_response.response.data))
