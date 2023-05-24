from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

fileName = "/home/sotatek/block.rlp";

sdk = OpenSDK(host)
debug_response = sdk.debug.trace_block_from_file(fileName)

print(debug_response)
