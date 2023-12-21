from web3.module import (
    Module
)
from web3.method import (
    Method,
    default_root_munger,
)
from typing import (
    Callable,
    Awaitable,
    Any,
)
from web3.net import Net, AsyncNet

class NetApi(Net):
    namespace = "net"
    
    
    _network_id: Method[Callable[..., Any]] = Method(
        namespace + "_networkId".replace("Id", "ID"), mungers=[default_root_munger]
    )

    def network_id(self, *args) -> Any:
        return self._network_id(*args)
    
    
    _peer_count: Method[Callable[..., Any]] = Method(
        namespace + "_peerCount".replace("Id", "ID"), mungers=[default_root_munger]
    )

    def peer_count(self, *args) -> Any:
        return self._peer_count(*args)
    
    
    _peer_count_by_type: Method[Callable[..., Any]] = Method(
        namespace + "_peerCountByType".replace("Id", "ID"), mungers=[default_root_munger]
    )

    def peer_count_by_type(self, *args) -> Any:
        return self._peer_count_by_type(*args)
    

class AsyncNetApi(AsyncNet):
    is_async = True
    namespace = "net"
    
    
    _network_id: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_networkId", mungers=[default_root_munger]
    )

    async def network_id(self, *args) -> Any:
        return await self._network_id(*args)
    
    
    _peer_count: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_peerCount", mungers=[default_root_munger]
    )

    async def peer_count(self, *args) -> Any:
        return await self._peer_count(*args)
    
    
    _peer_count_by_type: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_peerCountByType", mungers=[default_root_munger]
    )

    async def peer_count_by_type(self, *args) -> Any:
        return await self._peer_count_by_type(*args)
    
