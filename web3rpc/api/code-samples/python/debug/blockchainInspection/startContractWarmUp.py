from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

address = "0x4Cd39B49064a31E966cA0ddF4111aCe2eD7E9502"

sdk = OpenSDK(host)
debug_response = sdk.debug.start_contract_warm_up(address)

print(debug_response)
