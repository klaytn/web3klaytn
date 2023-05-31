from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

transactionHash = "0x5bbcde52084defa9d1c7068a811363cc27a25c80d7e495180964673aa5f47687"

sdk = OpenSDK(host)
eth_response = sdk.eth.get_transaction_by_hash(transactionHash)

print(eth_response)
