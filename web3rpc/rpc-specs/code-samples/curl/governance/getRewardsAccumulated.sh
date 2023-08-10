curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/governance/getRewardsAccumulated' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "governance_getRewardsAccumulated",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [123400489,123416489]
}'
