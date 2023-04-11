curl -X 'POST' \
  'https://public-en-cypress.klaytn.net/debug/writeMemProfile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_writeMemProfile",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["mem.profile"]
}'
