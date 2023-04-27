curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/getModifiedAccountsByHash' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_getModifiedAccountsByHash",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0xcc1ac1e244f9f83b812b5d77ada1c399f02ea7b61e72ff31789d9ef6dad45442", "0x437e92b2d30a0a828dfdd23b837a8ddf8c8b79c222e191d16c47afbf5a6aaed7"]
}'
