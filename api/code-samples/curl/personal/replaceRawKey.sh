curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/personal/replaceRawKey' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "personal_replaceRawKey",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    "0xcd87934ee007b7a458fa00dc0314fff8b2bd43b3071f46c820c379e483b4fd8e",
    "df4=B@0@xe$d",
    "gr8=B!0@uc$b"
  ]
}'
