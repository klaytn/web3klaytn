from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockNumber = "0xe8"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_block_transaction_count_by_number(blockNumber)

print(eth_response)
