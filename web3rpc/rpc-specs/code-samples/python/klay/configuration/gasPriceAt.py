from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

baseFee = "0x64"

sdk = OpenSDK(host)
klay_response = sdk.klay.gas_price_at(baseFee)

print(klay_response)
