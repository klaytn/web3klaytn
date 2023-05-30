from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

account = "0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8"
keys = ["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"]
blockNumber = "latest"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_proof(account, keys, blockNumber)

print(eth_response)
