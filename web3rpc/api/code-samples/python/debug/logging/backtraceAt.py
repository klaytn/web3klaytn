from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

location = "server.go:443"

sdk = OpenSDK(host)
debug_response = sdk.debug.backtrace_at(location)

print(debug_response)
