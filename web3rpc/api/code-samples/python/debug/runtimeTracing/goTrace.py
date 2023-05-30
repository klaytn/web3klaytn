from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

fileName = "go.trace"
seconds = 5

sdk = OpenSDK(host)
debug_response = sdk.debug.go_trace(fileName, seconds)

print(debug_response)
