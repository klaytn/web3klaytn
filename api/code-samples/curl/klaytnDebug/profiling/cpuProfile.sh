curl -X 'POST' \
  'https://public-en-cypress.klaytn.net/debug/cpuProfile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_cpuProfile",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["block.profile", 10]
}'
