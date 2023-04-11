curl -X 'POST' \
  'https://public-en-cypress.klaytn.net/debug/writeBlockProfile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_writeBlockProfile",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["block.profile"]
}'
