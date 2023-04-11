curl -X 'POST' \
  'https://public-en-cypress.klaytn.net/debug/writeMutexProfile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_writeMutexProfile",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["mem.profile"]
}'
