curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/eth/createAccessList' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "eth_createAccessList",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
