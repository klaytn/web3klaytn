from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"
blockTag = "0x2"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_code(address, blockTag)

print(klay_response)
