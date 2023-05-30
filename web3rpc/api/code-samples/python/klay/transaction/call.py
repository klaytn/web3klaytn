from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

callObject = {
    "from": "0x3f71029af4e252b25b9ab999f77182f0cd3bc085",
    "to": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
    "gas": "0x100000",
    "gasPrice": "0x5d21dba00",
    "value": "0x0",
    "input": "0x8ada066e"
}
blockTag = "latest"

sdk = OpenSDK(host)
klay_response = sdk.klay.call(callObject, blockTag)

print(klay_response)
