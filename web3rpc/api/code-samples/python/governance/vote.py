from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

key = "governance.governancemode"
value = "ballot"

sdk = OpenSDK(host)
governance_response = sdk.governance.vote(key, value)

print(governance_response)
