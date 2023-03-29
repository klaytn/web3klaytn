import json

from klay.opensdk_python_klay.configuration import Configuration
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import BlockNumber

host = "https://api.baobab.klaytn.net:8651"

klay = BlockNumber(ApiClient(configuration=Configuration(host=host)))
klay_response = klay.block_number()

print(json.loads(klay_response.response.data))
