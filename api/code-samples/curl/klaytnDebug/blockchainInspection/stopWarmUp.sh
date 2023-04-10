curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/stopWarnUp' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_stopWarnUp",
  "id": 1,
  "jsonrpc": "2.0"
}'
