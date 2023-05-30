from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0xc94770007dda54cF92009BFF0dE90c06F603a09f"
blockTag = "latest"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_transaction_count(address, blockTag)

print(eth_response)
