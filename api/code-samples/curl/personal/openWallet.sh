curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/personal/openWallet' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "personal_openWallet",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    "keystore://",
    "gr8=B!0@uc$b"
  ]
}'
