from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0xfa415bb3e6231f488ff39eb2897db0ef3636dd32"
message = "0xdeadbeaf"
password = "helloWorld"

sdk = OpenSDK(host)
personal_response = sdk.personal.sign(message, address, password)

print(personal_response)
