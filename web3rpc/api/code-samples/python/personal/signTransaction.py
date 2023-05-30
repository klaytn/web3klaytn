from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

transactionObject = {
    "from": "0x413ba0e5f6f00664598b5c80042b1308f4ff1408",
    "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
    "value": "0x1",
    "gas": "0x9999",
    "nonce": "0x1",
    "gasPrice": "0x25000000000"
}
password = "helloWorld"

sdk = OpenSDK(host)
personal_response = sdk.personal.sign_transaction(transactionObject, password)

print(personal_response)
