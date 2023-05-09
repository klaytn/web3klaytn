from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

quantity = "0x63000c8f11e790cb4c93b0659319a159"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_filter_changes(quantity)

print(klay_response)
