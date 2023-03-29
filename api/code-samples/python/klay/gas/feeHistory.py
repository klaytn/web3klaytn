import json

from klay.opensdk_python_klay.configuration import Configuration
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import FeeHistory

host = "https://api.baobab.klaytn.net:8651"

blockCount = "0x10"
lastBlock = "latest"
rewardPercentiles = [0.1, 0.2, 0.3]

klay = FeeHistory(ApiClient(configuration=Configuration(host=host)))
klay_response = klay.fee_history(blockCount, lastBlock, rewardPercentiles)

print(json.loads(klay_response.response.data))
