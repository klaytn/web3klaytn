curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/getModifiedStorageNodesByNumber' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_getModifiedStorageNodesByNumber",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0x77982323172e5b6182539d3522d5a33a944206d4", 100, 200]
}'
