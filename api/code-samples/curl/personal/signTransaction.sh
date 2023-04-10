curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/personal/signTransaction' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "personal_signTransaction",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    {
      "from":"0x77982323172e5b6182539d3522d5a33a944206d4",
      "to":"0xcd6bfdb523a4d030890d28bf1eb6ef36307c9aaa",
      "value":"0x10000",
      "gas":"0x1000000",
      "nonce":"0x2",
      "gasPrice":"0x25000000000"
    }
  ]
}'
