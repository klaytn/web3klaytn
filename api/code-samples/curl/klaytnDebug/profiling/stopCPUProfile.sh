curl -X 'POST' \
  'https://public-en-cypress.klaytn.net/debug/stopCPUProfile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_stopCPUProfile",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
