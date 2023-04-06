curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/personal/sign' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "personal_sign",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    "0xdead",
    "0xda04fb00e2cb5745cef7d8c4464378202a1673ef",
    "gr8=B!0@uc$b"
  ]
}'
