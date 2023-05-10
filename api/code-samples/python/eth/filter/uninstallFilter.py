from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

filterId = "0xb"

sdk = OpenSDK(host)
eth_response = sdk.eth.uninstall_filter(filterId)

print(eth_response)
