from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = "latest"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_staking_info(blockTag)

print(klay_response)