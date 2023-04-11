curl -X 'POST' \
  'https://public-en-cypress.klaytn.net/debug/mutexProfile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_mutexProfile",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["mutex.profile", 10]
}'
