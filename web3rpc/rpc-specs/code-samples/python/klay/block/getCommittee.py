from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = "0x1b4"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_committee(blockTag)

print(klay_response)
