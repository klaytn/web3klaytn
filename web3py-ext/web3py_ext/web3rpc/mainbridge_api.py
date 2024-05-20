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
    
    
    _add_peer_from_url: Method[Callable[..., Any]] = Method(
        namespace + "_addPeerFromUrl", mungers=[default_root_munger]
    )

    def add_peer_from_url(self, *args) -> Any:
        return self._add_peer_from_url(*args)
    
    
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
    
    
    _get_node_info: Method[Callable[..., Any]] = Method(
        namespace + "_getNodeInfo", mungers=[default_root_munger]
    )

    def get_node_info(self, *args) -> Any:
        return self._get_node_info(*args)
    
    
    _remove_peer_from_url: Method[Callable[..., Any]] = Method(
        namespace + "_removePeerFromUrl", mungers=[default_root_munger]
    )

    def remove_peer_from_url(self, *args) -> Any:
        return self._remove_peer_from_url(*args)
    

class AsyncMainbridgeApi(Module):
    is_async = True
    namespace = "mainbridge"
    
    
    _add_peer_from_url: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_addPeerFromUrl", mungers=[default_root_munger]
    )

    async def add_peer_from_url(self, *args) -> Any:
        return await self._add_peer_from_url(*args)
    
    
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
    
    
    _get_node_info: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_getNodeInfo", mungers=[default_root_munger]
    )

    async def get_node_info(self, *args) -> Any:
        return await self._get_node_info(*args)
    
    
    _remove_peer_from_url: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_removePeerFromUrl", mungers=[default_root_munger]
    )

    async def remove_peer_from_url(self, *args) -> Any:
        return await self._remove_peer_from_url(*args)
    
