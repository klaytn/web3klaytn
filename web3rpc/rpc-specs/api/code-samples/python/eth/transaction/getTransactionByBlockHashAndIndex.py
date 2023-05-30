from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68"
transactionIndexPosition = "0x0"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_transaction_by_block_hash_and_index(blockHash, transactionIndexPosition)

print(eth_response)
