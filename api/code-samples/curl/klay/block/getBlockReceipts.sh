curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/klay/getBlockReceipts' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "klay_getBlockReceipts",
  "id": 73,
  "jsonrpc": "2.0",
  "params": ["0xdc762ed0274496e2a42278e2648d910d82468687b5415bb5eb058a96a0b93c30"]
}'
