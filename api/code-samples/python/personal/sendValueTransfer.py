import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

transactionObject = {
    "from": "0x1d4e05bb72677cb8fa576149c945b57d13f855e4",
    "to": "0xafa3f8684e54059998bc3a7b0d2b0da075154d66",
    "value": "0x1230000000"
}
password = "helloWorld"

sdk = OpenSDK(host)
personal_response = sdk.personal.send_value_transfer(transactionObject, password)

print(json.loads(personal_response.response.data))
