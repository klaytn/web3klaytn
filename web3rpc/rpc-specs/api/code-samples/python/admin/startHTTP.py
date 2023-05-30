from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

adminHost = "127.0.0.1"
port = 8551
cors = ""
apis = "klay"

sdk = OpenSDK(host)
admin_response = sdk.admin.start_http(adminHost, port, cors, apis)

print(admin_response)
