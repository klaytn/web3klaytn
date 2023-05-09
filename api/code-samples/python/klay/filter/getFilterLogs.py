from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

quantity = "0x16"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_filter_logs(quantity)

print(klay_response)
