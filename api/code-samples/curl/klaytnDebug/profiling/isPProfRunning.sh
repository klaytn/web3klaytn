curl -X 'POST' \
  'https://public-en-baobab.klaytn.net/debug/isPProfRunning' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_isPProfRunning",
  "id": 1,
  "jsonrpc": "2.0"
}'
