import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

txHash = "0x07f6057bc93aca52e53cdbfac9b9830f6a9cae2b3f48f0b47e4cb54959143d09";

sdk = OpenSDK(host)
debug_response = sdk.debug.trace_transaction(txHash)

print(json.loads(debug_response.response.data))
