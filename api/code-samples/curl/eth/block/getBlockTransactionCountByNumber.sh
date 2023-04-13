curl -X 'POST' \
  'https://dev.api.klaytn.sotatek.works/eth/getBlockTransactionCountByNumber' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "eth_getBlockTransactionCountByNumber",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0xe8"]
}'
