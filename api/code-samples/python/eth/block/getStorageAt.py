from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0x295a70b2de5e3953354a6a8344e616ed314d7251"
quantity = "0x0"
blockTag = "latest"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_storage_at(address, quantity, blockTag)

print(eth_response)
