from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

limit = 5

sdk = OpenSDK(host)
admin_response = sdk.admin.set_max_subscription_per_ws_conn(limit)

print(admin_response)
