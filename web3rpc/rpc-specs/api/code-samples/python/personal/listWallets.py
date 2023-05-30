from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
personal_response = sdk.personal.list_wallets()

print(personal_response)
