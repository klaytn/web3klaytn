curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/standardTraceBadBlockToFile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_standardTraceBadBlockToFile",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0x485fff444481ee28debe50639f312f44e0a09342161a8906a99cf325cc2512a4"]
}'
