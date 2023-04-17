curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/personal/unlockAccount' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "personal_unlockAccount",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    "0x5e97870f263700f46aa00d967821199b9bc5a120",
    "foo",
    30
  ]
}'
