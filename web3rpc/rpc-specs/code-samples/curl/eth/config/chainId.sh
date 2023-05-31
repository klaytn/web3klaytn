curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/eth/chainId' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "eth_chainId",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
