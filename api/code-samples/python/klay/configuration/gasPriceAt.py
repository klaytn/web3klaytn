import json

from klay.opensdk_python_klay.configuration import Configuration
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import GasPriceAt

host = "https://api.baobab.klaytn.net:8651"

baseFee = "0x64"

klay = GasPriceAt(ApiClient(configuration=Configuration(host=host)))
klay_response = klay.gas_price_at(baseFee)

print(json.loads(klay_response.response.data))
