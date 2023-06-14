from opensdk.sdk import OpenSDK

host = "https://dev.api.klaytn.sotatek.works"

address = "0x73a7d19d14f7dfac5b799e405e22133b2adc57a6"
startBlockNum = 100
endBlockNum = 200

sdk = OpenSDK(host)
debug_response = sdk.debug.get_modified_storage_nodes_by_number(address, startBlockNum, endBlockNum)

print(debug_response)
