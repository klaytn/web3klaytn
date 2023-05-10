from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec"
blockNumberOrHash = "latest"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_balance(address, blockNumberOrHash)

print(eth_response)
