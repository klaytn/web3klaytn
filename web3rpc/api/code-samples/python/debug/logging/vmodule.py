from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

module = "p2p=4"

sdk = OpenSDK(host)
debug_response = sdk.debug.vmodule(module)

print(debug_response)
