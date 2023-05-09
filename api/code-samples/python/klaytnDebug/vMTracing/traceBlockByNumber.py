from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

number = 21

sdk = OpenSDK(host)
debug_response = sdk.debug.trace_block_by_number(number)

print(debug_response)
