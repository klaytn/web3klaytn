import json

from klay.opensdk_python_klay.configuration import Configuration
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import GetBalance

host = "https://api.baobab.klaytn.net:8651"

address = "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722"
blockTag = "latest"

klay = GetBalance(ApiClient(configuration=Configuration(host=host)))
klay_response = klay.get_balance(address, blockTag)

print(json.loads(klay_response.response.data))
