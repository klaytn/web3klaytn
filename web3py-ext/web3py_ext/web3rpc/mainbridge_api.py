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
from web3.geth import GethAdmin, GethPersonal, GethTxPool
from web3.net import Net

class MainbridgeApi(Module):
    namespace = "mainbridge"
    
    
    _add_peer1: Method[Callable[..., Any]] = Method(
        namespace + "_addPeer1", mungers=[default_root_munger]
    )

    def add_peer1(self, *args) -> Any:
        return self._add_peer1(*args)
    
    
    _convert_child_chain_block_hash_to_parent_chain_tx_hash: Method[Callable[..., Any]] = Method(
        namespace + "_convertChildChainBlockHashToParentChainTxHash", mungers=[default_root_munger]
    )

    def convert_child_chain_block_hash_to_parent_chain_tx_hash(self, *args) -> Any:
        return self._convert_child_chain_block_hash_to_parent_chain_tx_hash(*args)
    
    
    _get_child_chain_indexing_enabled: Method[Callable[..., Any]] = Method(
        namespace + "_getChildChainIndexingEnabled", mungers=[default_root_munger]
    )

    def get_child_chain_indexing_enabled(self, *args) -> Any:
        return self._get_child_chain_indexing_enabled(*args)
    
    
    _node_info1: Method[Callable[..., Any]] = Method(
        namespace + "_nodeInfo1", mungers=[default_root_munger]
    )

    def node_info1(self, *args) -> Any:
        return self._node_info1(*args)
    
    
    _remove_peer1: Method[Callable[..., Any]] = Method(
        namespace + "_removePeer1", mungers=[default_root_munger]
    )

    def remove_peer1(self, *args) -> Any:
        return self._remove_peer1(*args)
    

class AsyncMainbridgeApi(Module):
    is_async = True
    namespace = "mainbridge"
    
    
    _add_peer1: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_addPeer1", mungers=[default_root_munger]
    )

    async def add_peer1(self, *args) -> Any:
        return await self._add_peer1(*args)
    
    
    _convert_child_chain_block_hash_to_parent_chain_tx_hash: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_convertChildChainBlockHashToParentChainTxHash", mungers=[default_root_munger]
    )

    async def convert_child_chain_block_hash_to_parent_chain_tx_hash(self, *args) -> Any:
        return await self._convert_child_chain_block_hash_to_parent_chain_tx_hash(*args)
    
    
    _get_child_chain_indexing_enabled: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_getChildChainIndexingEnabled", mungers=[default_root_munger]
    )

    async def get_child_chain_indexing_enabled(self, *args) -> Any:
        return await self._get_child_chain_indexing_enabled(*args)
    
    
    _node_info1: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_nodeInfo1", mungers=[default_root_munger]
    )

    async def node_info1(self, *args) -> Any:
        return await self._node_info1(*args)
    
    
    _remove_peer1: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_removePeer1", mungers=[default_root_munger]
    )

    async def remove_peer1(self, *args) -> Any:
        return await self._remove_peer1(*args)
    
