curl -X 'POST' \
  'http://localhost:8551' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "governance_showTally",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
