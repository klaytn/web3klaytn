curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/kaia/getCommittee' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "kaia_getCommittee",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0x1b4"]
}'
