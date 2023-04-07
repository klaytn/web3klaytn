curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/personal/sendValueTransfer' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "personal_sendValueTransfer",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    {
        "from":"0x1d4e05bb72677cb8fa576149c945b57d13f855e4",
        "to":"0xafa3f8684e54059998bc3a7b0d2b0da075154d66",
        "value":"0x1230000000"
    },
    "gr8=B!0@uc$b"
  ]
}'
