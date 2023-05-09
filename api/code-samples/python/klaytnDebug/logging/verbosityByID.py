from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

verId = 1
level = 3

sdk = OpenSDK(host)
debug_response = sdk.debug.verbosity_by_id(verId, level)

print(debug_response)
