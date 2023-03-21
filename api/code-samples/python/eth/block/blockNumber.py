import json

from eth.opensdk_python_eth.configuration import Configuration
from eth.opensdk_python_eth.api_client import ApiClient
from eth.opensdk_python_eth.apis.tags.eth_api import BlockNumber

host = "https://api.baobab.klaytn.net:8651"

eth = BlockNumber(ApiClient(configuration=Configuration(host=host)))
eth_response = eth.block_number()

print(json.loads(eth_response.response.data))
