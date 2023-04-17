curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/freeOSMemory' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_freeOSMemory",
  "id": 1,
  "jsonrpc": "2.0"
}'
