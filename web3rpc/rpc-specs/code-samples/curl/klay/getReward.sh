curl -X 'POST' \
  'http://localhost:8551' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "klay_getRewards",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    "latest"
  ]
}'
