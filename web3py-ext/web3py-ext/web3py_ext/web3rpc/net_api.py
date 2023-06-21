from web3.module import (
    Module
)
from web3.method import (
    Method,
    default_root_munger,
)
from typing import (
    Callable,
    Any,
)
from web3.geth import GethAdmin, GethPersonal
from web3.net import Net

class NetApi(Net):
    namespace = "net"
    
    
    _network_id: Method[Callable[..., Any]] = Method(
        namespace + "_networkId", mungers=[default_root_munger]
    )

    def network_id(self, *args) -> Any:
        return self._network_id(*args)
    
    
    _peer_count: Method[Callable[..., Any]] = Method(
        namespace + "_peerCount", mungers=[default_root_munger]
    )

    def peer_count(self, *args) -> Any:
        return self._peer_count(*args)
    
    
    _peer_count_by_type: Method[Callable[..., Any]] = Method(
        namespace + "_peerCountByType", mungers=[default_root_munger]
    )

    def peer_count_by_type(self, *args) -> Any:
        return self._peer_count_by_type(*args)
    
