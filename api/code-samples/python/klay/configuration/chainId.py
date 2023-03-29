import json

from klay.opensdk_python_klay.configuration import Configuration
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import ChainId

host = "https://api.baobab.klaytn.net:8651"

klay = ChainId(ApiClient(configuration=Configuration(host=host)))
klay_response = klay.chain_id()

print(json.loads(klay_response.response.data))
