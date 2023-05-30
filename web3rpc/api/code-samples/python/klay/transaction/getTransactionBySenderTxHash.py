from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

transactionHash = "0x18fe9e1007da7d20aad77778557fb8acc58c80054daba65124c8c843aadd3478"

sdk = OpenSDK(host)
klay_response = sdk.klay.get_transaction_by_sender_tx_hash(transactionHash)

print(klay_response)
