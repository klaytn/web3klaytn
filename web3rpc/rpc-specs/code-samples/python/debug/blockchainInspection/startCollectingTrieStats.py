from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0x0000000000000000000000000000000000000000"

sdk = OpenSDK(host)
debug_response = sdk.debug.start_collecting_trie_stats(address)

print(debug_response)
