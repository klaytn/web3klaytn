curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/standardTraceBadBlockToFile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_standardTraceBadBlockToFile",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6"]
}'
