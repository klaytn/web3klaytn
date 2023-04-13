curl -X 'POST' \
  ' https://dev.api.klaytn.sotatek.works/eth/protocolVersion' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "eth_protocolVersion",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
