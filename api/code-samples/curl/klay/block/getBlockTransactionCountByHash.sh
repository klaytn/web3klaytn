curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/klay/getBlockTransactionCountByHash' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "klay_getBlockTransactionCountByHash",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0x0c11803ab36110db993e7520908b9ba9336cca2f2dcc9b6130c481a3ccdc2621"]
}'
