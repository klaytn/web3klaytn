from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = 1
numberRange = 10

sdk = OpenSDK(host)
klay_response = sdk.klay.get_block_with_consensus_info_by_number_range(blockHash, numberRange)

print(klay_response)
