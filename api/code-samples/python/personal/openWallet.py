from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

url = "keystore://"
passphrase = "helloWorld"

sdk = OpenSDK(host)
personal_response = sdk.personal.open_wallet(url, passphrase)

print(personal_response)
