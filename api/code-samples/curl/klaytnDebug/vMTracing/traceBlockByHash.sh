curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/traceBlockByHash' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_traceBlockByHash",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0x07f6057bc93aca52e53cdbfac9b9830f6a9cae2b3f48f0b47e4cb54959143d09"]
}'
