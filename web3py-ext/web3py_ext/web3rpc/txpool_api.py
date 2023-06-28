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

class TxpoolApi(Module):
    namespace = "txpool"
    
    
    _content: Method[Callable[..., Any]] = Method(
        namespace + "_content", mungers=[default_root_munger]
    )

    def content(self, *args) -> Any:
        return self._content(*args)
    
    
    _inspect: Method[Callable[..., Any]] = Method(
        namespace + "_inspect", mungers=[default_root_munger]
    )

    def inspect(self, *args) -> Any:
        return self._inspect(*args)
    
    
    _status: Method[Callable[..., Any]] = Method(
        namespace + "_status", mungers=[default_root_munger]
    )

    def status(self, *args) -> Any:
        return self._status(*args)
    
