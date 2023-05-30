from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

fileName = "/tmp/chain.txt"

sdk = OpenSDK(host)
admin_response = sdk.admin.export_chain(fileName)

print(admin_response)
