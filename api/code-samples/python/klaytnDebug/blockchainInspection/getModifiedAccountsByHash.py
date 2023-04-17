import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

startBlockHash = "0xf07cd36ec44fc4b540dd9423317fd49171f03cc6063e8b517dfc9fe14d08ab7a"
endBlockHash = "0xef15330537698b6cdfe31966cd0e0264af191c828a03a1a40e23ad465917b215"

sdk = OpenSDK(host)
debug_response = sdk.debug.get_modified_accounts_by_hash(startBlockHash, endBlockHash)

print(json.loads(debug_response.response.data))
