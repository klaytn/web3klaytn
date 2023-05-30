from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = "0x1b4"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_header_by_number(blockTag)

print(eth_response)
