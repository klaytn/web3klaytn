curl -X 'POST' \
  'https://dev.api.klaytn.sotatek.works/admin/stopSpamThrottler' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "admin_stopSpamThrottler",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'