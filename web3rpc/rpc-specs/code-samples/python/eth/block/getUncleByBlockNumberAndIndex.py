from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = "0xe8"
uncleIndex = "0x1"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_uncle_by_block_number_and_index(blockTag, uncleIndex)

print(eth_response)
