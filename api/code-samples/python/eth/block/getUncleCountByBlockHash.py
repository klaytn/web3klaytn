from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_uncle_count_by_block_hash(blockHash)

print(eth_response)
