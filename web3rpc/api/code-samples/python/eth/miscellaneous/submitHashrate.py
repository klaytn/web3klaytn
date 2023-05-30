from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

hashrate = "0x5"
hashrateId = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

sdk = OpenSDK(host)
eth_response = sdk.eth.submit_hashrate(hashrate, hashrateId)

print(eth_response)
