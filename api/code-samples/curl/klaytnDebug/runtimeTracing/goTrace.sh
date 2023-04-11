curl -X 'POST' \
  'https://public-en-cypress.klaytn.net/debug/goTrace' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_goTrace",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["go.trace",5]
}'
