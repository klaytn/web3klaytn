from eth.opensdk_python_eth.api_client import ApiClient as EthApiClient
from eth.opensdk_python_eth.apis.tags.eth_api import EthApi
from eth.opensdk_python_eth.configuration import Configuration as EthConfiguration
from klay.opensdk_python_klay.apis.tags.klay_api import KlayApi
from klay.opensdk_python_klay.configuration import Configuration as KlayConfiguration
from klay.opensdk_python_klay.api_client import ApiClient as KlayApiClient
from net.opensdk_python_net.api_client import ApiClient as NetApiClient
from net.opensdk_python_net.configuration import Configuration as NetConfiguration
from net.opensdk_python_net.apis.tags.net_api import NetApi
from txpool.opensdk_python_txpool.api_client import ApiClient as TxPollApiClient
from txpool.opensdk_python_txpool.configuration import Configuration as TxPollConfiguration
from txpool.opensdk_python_txpool.apis.tags.txpool_api import TxpoolApi


class OpenSDK:

    def __init__(self, kalytn_url):
        self.kalytn_url = kalytn_url

    @property
    def eth(self):
        return EthApi(EthApiClient(configuration=EthConfiguration(self.kalytn_url)))

    @property
    def klay(self):
        return KlayApi(KlayApiClient(configuration=KlayConfiguration(self.kalytn_url)))

    @property
    def net(self):
        return NetApi(NetApiClient(configuration=NetConfiguration(self.kalytn_url)))

    @property
    def txpool(self):
        return TxpoolApi(TxPollApiClient(configuration=TxPollConfiguration(self.kalytn_url)))
