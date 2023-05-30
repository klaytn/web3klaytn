curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/net/version' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "net_version",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
