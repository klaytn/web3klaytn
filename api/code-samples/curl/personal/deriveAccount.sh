curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/personal/deriveAccount' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "personal_deriveAccount",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    "0x4abd4157a85bbd6ffb853d1f411147eec0d36458c275a3f4527fa171a0f0b6c4",
    "m/44'/0'/0'",
    false
  ]
}'
