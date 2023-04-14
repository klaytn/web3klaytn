curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/traceBlock' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_traceBlock",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0xbeb0c8cbe6a7433459bded0e0f5cf7e48dd9039d38f3a618a82dee63cf297e05"]
}'
