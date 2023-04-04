curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/klay/getBlockWithConsensusInfoByHash' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "klay_getBlockWithConsensusInfoByHash",
  "id": 73,
  "jsonrpc": "2.0",
  "params": ["0x7d68d09a7a571cdf8a3b6a5ef6e037265b3e3093cf145b0954d22bde5c1d4f61"]
}'
