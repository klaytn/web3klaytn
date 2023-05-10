from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
governance_response = sdk.governance.my_voting_power()

print(governance_response)
