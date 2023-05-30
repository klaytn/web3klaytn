from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

privateKey = "cd87934ee007b7a458fa00dc0314fff8b2bd43b3079f46c820c379e483b4fd8e"
passphrase = "mypassword"

sdk = OpenSDK(host)
personal_response = sdk.personal.import_raw_key(privateKey, passphrase)

print(personal_response)
