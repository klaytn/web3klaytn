from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

passphrase = "helloWorld"

sdk = OpenSDK(host)
personal_response = sdk.personal.new_account(passphrase)

print(personal_response)
