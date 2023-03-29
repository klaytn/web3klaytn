import json

from klay.opensdk_python_klay.configuration import Configuration
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import GetBlockByNumber

host = "https://api.baobab.klaytn.net:8651"

blockCount = "0x1b4"
boolean = True

klay = GetBlockByNumber(ApiClient(configuration=Configuration(host=host)))
klay_response = klay.get_block_by_number(blockCount, boolean)

print(json.loads(klay_response.response.data))
