from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

url = "url"
path = "path"
pin = True

sdk = OpenSDK(host)
personal_response = sdk.personal.derive_account(url, path, pin)

print(personal_response)
