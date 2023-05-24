from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

startBlockNum = 171904
endBlockNum = 172160

sdk = OpenSDK(host)
debug_response = sdk.debug.get_modified_accounts_by_number(startBlockNum, endBlockNum)

print(debug_response)
