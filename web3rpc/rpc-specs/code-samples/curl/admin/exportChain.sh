curl -X 'POST' \
  'http://localhost:8551' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "admin_exportChain",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    "/tmp/chain.txt", 1, 1000
  ]
}'
