curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/eth/fillTransaction' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "eth_fillTransaction",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    {
      "from": "0xca7a99380131e6c76cfa622396347107aeedca2d",
      "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
      "value": "0x1",
      "gas": "0x9999",
      "maxFeePerGas":
      "0x5d21dba00"
    }
  ]
}'
