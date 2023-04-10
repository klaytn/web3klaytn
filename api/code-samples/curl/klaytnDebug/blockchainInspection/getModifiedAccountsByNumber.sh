curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/getModifiedAccountsByNumber' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_getModifiedAccountsByNumber",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [171904, 172160]
}'
