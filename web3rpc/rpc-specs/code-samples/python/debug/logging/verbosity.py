from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

level = 3

sdk = OpenSDK(host)
debug_response = sdk.debug.verbosity(level)

print(debug_response)
