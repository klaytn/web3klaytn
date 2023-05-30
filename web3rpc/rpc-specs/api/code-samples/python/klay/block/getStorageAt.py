from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0x295a70b2de5e3953354a6a8344e616ed314d7251"
position = "0x0"
blockHash = "latest"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_storage_at(address, position, blockHash)

print(klay_response)
