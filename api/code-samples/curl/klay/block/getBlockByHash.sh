curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/klay/getBlockByHash' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "klay_getBlockByHash",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c", true]
}'
