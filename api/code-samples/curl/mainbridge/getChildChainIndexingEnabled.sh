curl -X 'POST' \
  'https://public-en-cypress.klaytn.net/mainbridge/getChildChainIndexingEnabled' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "mainbridge_nodeInfo",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
