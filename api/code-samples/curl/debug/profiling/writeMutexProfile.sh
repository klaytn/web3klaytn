curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/writeMutexProfile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_writeMutexProfile",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["mutex.profile"]
}'
