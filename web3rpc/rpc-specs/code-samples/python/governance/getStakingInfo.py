from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockNumber = "latest"

sdk = OpenSDK(host)
governance_response = sdk.governance.get_staking_info(blockNumber)

print(governance_response)
