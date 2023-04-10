curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/getModifiedAccountsByHash' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_getModifiedAccountsByHash",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0x583a02df4222c82d4ffe5d3658d0f7ac233f4dc5de83f6430d74199038b606b6", "0x69833f0fc012dc36be910aa6909f5395cd35136dbeae29ed2170a7d4162a009c"]
}'
