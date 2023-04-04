curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/net/peerCount' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "net_peerCount",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
