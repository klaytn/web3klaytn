curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/traceBlockByHash' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_traceBlockByHash",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0xd925ee89e4755ef25b4958b2f6bc29e67197d263bac0a758689fa8cc67a204ca"]
}'
