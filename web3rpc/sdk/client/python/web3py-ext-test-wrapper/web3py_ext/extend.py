from web3rpc_python_net.api.net_api import NetApi
from web3rpc_python_klay.api.klay_api import KlayApi
from web3rpc_python_governance.api.governance_api import GovernanceApi
from web3rpc_python_txpool.api.txpool_api import TxpoolApi
from web3rpc_python_debug.api.debug_api import DebugApi
from web3rpc_python_admin.api.admin_api import AdminApi
from web3rpc_python_personal.api.personal_api import PersonalApi

from web3.eth.eth import Eth
from web3.geth import Geth, GethAdmin, GethMiner, GethPersonal, GethTxPool
from web3.net import Net
from web3.testing import Testing
from web3.tracing import Tracing
from web3.module import Module
import web3
def extended_get_default_modules():
    return {
        "eth": Eth,
        "net": NetApi,
        "geth": (
            Geth,
            {
                "admin": AdminApi,
                "miner": GethMiner,
                "personal": PersonalApi,
                "txpool": TxpoolApi,
            },
        ),
        "tracing": Tracing,
        "testing": Testing,
        "klay": KlayApi,
        "governance": GovernanceApi,
        "debug": DebugApi
    }
web3.main.get_default_modules = extended_get_default_modules