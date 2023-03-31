import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
klay_response = sdk.klay.is_parallel_db_write()

print(json.loads(klay_response.response.data))