from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

rate = 2

sdk = OpenSDK(host)
debug_response = sdk.debug.set_mutex_profile_fraction(rate)

print(debug_response)
