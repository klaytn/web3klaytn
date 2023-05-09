from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

name = "API"
level = 1

sdk = OpenSDK(host)
debug_response = sdk.debug.verbosity_by_name(name, level)

print(debug_response)
