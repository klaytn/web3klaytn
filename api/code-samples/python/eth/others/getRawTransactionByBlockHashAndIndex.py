from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0x4c4cbf242a80183d2ea2daf047c578d5fc89c0b14c4262606c8b6bb0b36715be"
index = "0x0"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_raw_transaction_by_block_hash_and_index(blockHash, index)

print(eth_response)
