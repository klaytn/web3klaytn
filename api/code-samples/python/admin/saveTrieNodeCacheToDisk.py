import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

sdk = OpenSDK(host)
admin_response = sdk.admin.save_trie_node_cache_to_disk()

print(json.loads(admin_response.response.data))
