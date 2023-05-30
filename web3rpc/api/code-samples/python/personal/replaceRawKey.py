from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

keyData = "24c34f686a5848edb19180fb723b5db21c626f253e8b63bf8a0054ea67852c0a"
oldPassphrase = "helloWorld"
newPassphrase = "helloWorld"

sdk = OpenSDK(host)
personal_response = sdk.personal.replace_raw_key(keyData, oldPassphrase, newPassphrase)

print(personal_response)
