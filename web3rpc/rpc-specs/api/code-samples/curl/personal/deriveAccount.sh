curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/personal/deriveAccount' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "personal_deriveAccount",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    "url",
    "path",
    true
  ]
}'
