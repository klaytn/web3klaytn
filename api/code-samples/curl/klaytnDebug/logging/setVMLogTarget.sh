curl -X 'POST' \
  'https://public-en-cypress.klaytn.net/debug/blockProfile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_setVMLogTarget",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [3]
}'
