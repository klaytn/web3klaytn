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
from web3.geth import GethAdmin, GethPersonal, GethTxPool
from web3.net import Net

class GovernanceApi(Module):
    namespace = "governance"
    
    
    _chain_config: Method[Callable[..., Any]] = Method(
        namespace + "_chainConfig", mungers=[default_root_munger]
    )

    def chain_config(self, *args) -> Any:
        return self._chain_config(*args)
    
    
    _get_staking_info: Method[Callable[..., Any]] = Method(
        namespace + "_getStakingInfo", mungers=[default_root_munger]
    )

    def get_staking_info(self, *args) -> Any:
        return self._get_staking_info(*args)
    
    
    _idx_cache: Method[Callable[..., Any]] = Method(
        namespace + "_idxCache", mungers=[default_root_munger]
    )

    def idx_cache(self, *args) -> Any:
        return self._idx_cache(*args)
    
    
    _idx_cache_from_db: Method[Callable[..., Any]] = Method(
        namespace + "_idxCacheFromDb", mungers=[default_root_munger]
    )

    def idx_cache_from_db(self, *args) -> Any:
        return self._idx_cache_from_db(*args)
    
    
    _item_cache_from_db: Method[Callable[..., Any]] = Method(
        namespace + "_itemCacheFromDb", mungers=[default_root_munger]
    )

    def item_cache_from_db(self, *args) -> Any:
        return self._item_cache_from_db(*args)
    
    
    _items_at: Method[Callable[..., Any]] = Method(
        namespace + "_itemsAt", mungers=[default_root_munger]
    )

    def items_at(self, *args) -> Any:
        return self._items_at(*args)
    
    
    _my_votes: Method[Callable[..., Any]] = Method(
        namespace + "_myVotes", mungers=[default_root_munger]
    )

    def my_votes(self, *args) -> Any:
        return self._my_votes(*args)
    
    
    _my_voting_power: Method[Callable[..., Any]] = Method(
        namespace + "_myVotingPower", mungers=[default_root_munger]
    )

    def my_voting_power(self, *args) -> Any:
        return self._my_voting_power(*args)
    
    
    _node_address: Method[Callable[..., Any]] = Method(
        namespace + "_nodeAddress", mungers=[default_root_munger]
    )

    def node_address(self, *args) -> Any:
        return self._node_address(*args)
    
    
    _pending_changes: Method[Callable[..., Any]] = Method(
        namespace + "_pendingChanges", mungers=[default_root_munger]
    )

    def pending_changes(self, *args) -> Any:
        return self._pending_changes(*args)
    
    
    _show_tally: Method[Callable[..., Any]] = Method(
        namespace + "_showTally", mungers=[default_root_munger]
    )

    def show_tally(self, *args) -> Any:
        return self._show_tally(*args)
    
    
    _total_voting_power: Method[Callable[..., Any]] = Method(
        namespace + "_totalVotingPower", mungers=[default_root_munger]
    )

    def total_voting_power(self, *args) -> Any:
        return self._total_voting_power(*args)
    
    
    _vote: Method[Callable[..., Any]] = Method(
        namespace + "_vote", mungers=[default_root_munger]
    )

    def vote(self, *args) -> Any:
        return self._vote(*args)
    
    
    _votes: Method[Callable[..., Any]] = Method(
        namespace + "_votes", mungers=[default_root_munger]
    )

    def votes(self, *args) -> Any:
        return self._votes(*args)
    
