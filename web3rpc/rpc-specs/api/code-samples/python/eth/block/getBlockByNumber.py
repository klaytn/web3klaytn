from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockTag = "0xd0054e"
transactionObject = False

sdk = OpenSDK(host)
eth_response = sdk.eth.get_block_by_number(blockTag, transactionObject)

print(eth_response)
