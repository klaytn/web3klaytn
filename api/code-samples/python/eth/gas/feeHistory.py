import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

blockCount = "0x10"
lastBlock = "latest"
rewardPercentiles = [0.1, 0.2, 0.3]

sdk = OpenSDK(host)
eth_response = sdk.eth.fee_history(blockCount, lastBlock, rewardPercentiles)

print(json.loads(eth_response.response.data))
