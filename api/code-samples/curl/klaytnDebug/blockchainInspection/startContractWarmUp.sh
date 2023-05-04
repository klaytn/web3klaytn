curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/startContractWarmUp' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_startContractWarmUp",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0x4Cd39B49064a31E966cA0ddF4111aCe2eD7E9502"]
}'
