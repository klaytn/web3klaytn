import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0x651722eb826af57fd95a2381c9cc0c162f90087d8283d02945c42b48229edf86"

sdk = OpenSDK(host)
debug_response = sdk.debug.trace_block_by_hash(blockHash)

print(json.loads(debug_response.response.data))
