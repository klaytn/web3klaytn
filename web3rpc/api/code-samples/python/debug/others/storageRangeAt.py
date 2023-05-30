from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockHash = "0x90c81195698bc9f282bbdec386b0afb4dcc28e43aae834894281c3ecb3c88d21"
txIndex = 1
address = "0x73a7d19d14f7dfac5b799e405e22133b2adc57a6"
keyStart = "0x12"
maxResult = 1

sdk = OpenSDK(host)
debug_response = sdk.debug.storage_range_at(blockHash, txIndex, address, keyStart, maxResult)

print(debug_response)
