curl -X 'POST' \
  'https://public-en-cypress.klaytn.net/debug/startCPUProfile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_startCPUProfile",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["cpu.profile"]
}'