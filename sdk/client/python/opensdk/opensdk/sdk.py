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
from personal.opensdk_python_personal.api_client import ApiClient as PersonalApiClient
from personal.opensdk_python_personal.configuration import Configuration as PersonalConfiguration
from personal.opensdk_python_personal.apis.tags.personal_api import PersonalApi
from debug.opensdk_python_debug.api_client import ApiClient as DebugApiClient
from debug.opensdk_python_debug.configuration import Configuration as DebugConfiguration
from debug.opensdk_python_debug.apis.tags.debug_api import DebugApi
from governance.opensdk_python_governance.api_client import ApiClient as GovernanceApiClient
from governance.opensdk_python_governance.configuration import Configuration as GovernanceConfiguration
from governance.opensdk_python_governance.apis.tags.governance_api import GovernanceApi
from admin.opensdk_python_admin.api_client import ApiClient as AminApiClient
from admin.opensdk_python_admin.configuration import Configuration as AdminConfiguration
from admin.opensdk_python_admin.apis.tags.admin_api import AdminApi


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

    @property
    def personal(self):
        return PersonalApi(PersonalApiClient(configuration=PersonalConfiguration(self.kalytn_url)))

    @property
    def debug(self):
        return DebugApi(DebugApiClient(configuration=DebugConfiguration(self.kalytn_url)))

    @property
    def governance(self):
        return GovernanceApi(GovernanceApiClient(configuration=GovernanceConfiguration(self.kalytn_url)))

    @property
    def admin(self):
        return AdminApi(AminApiClient(configuration=AdminConfiguration(self.kalytn_url)))
