curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/getModifiedAccountsByHash' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_getModifiedAccountsByHash",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0xf07cd36ec44fc4b540dd9423317fd49171f03cc6063e8b517dfc9fe14d08ab7a", "0xef15330537698b6cdfe31966cd0e0264af191c828a03a1a40e23ad465917b215"]
}'
