from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sha3Hash = "0xaf953a2d01f55cfe080c0c94150a60105e8ac3d51153058a1f03dd239dd08586"

sdk = OpenSDK(host)
debug_response = sdk.debug.preimage(sha3Hash)

print(debug_response)
