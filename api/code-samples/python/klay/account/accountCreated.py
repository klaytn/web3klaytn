import json

from klay.opensdk_python_klay.configuration import Configuration
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import AccountCreated

host = "https://api.baobab.klaytn.net:8651"

address = '0xa4f42d4d2a3a13874406435500950c9bf2d783db'
blockTag = 'latest'

klay = AccountCreated(ApiClient(configuration=Configuration(host=host)))
klay_response = klay.account_created(address, blockTag)

print(json.loads(klay_response.response.data))
