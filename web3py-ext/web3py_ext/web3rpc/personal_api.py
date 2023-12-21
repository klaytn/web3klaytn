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
from web3.geth import GethPersonal, AsyncGethPersonal
from web3.net import Net

class PersonalApi(GethPersonal):
    namespace = "personal"
    
    
    _derive_account: Method[Callable[..., Any]] = Method(
        namespace + "_deriveAccount", mungers=[default_root_munger]
    )

    def derive_account(self, *args) -> Any:
        return self._derive_account(*args)
    
    
    _ec_recover: Method[Callable[..., Any]] = Method(
        namespace + "_ecRecover", mungers=[default_root_munger]
    )

    def ec_recover(self, *args) -> Any:
        return self._ec_recover(*args)
    
    
    _import_raw_key: Method[Callable[..., Any]] = Method(
        namespace + "_importRawKey", mungers=[default_root_munger]
    )

    def import_raw_key(self, *args) -> Any:
        return self._import_raw_key(*args)
    
    
    _list_accounts: Method[Callable[..., Any]] = Method(
        namespace + "_listAccounts", mungers=[default_root_munger]
    )

    def list_accounts(self, *args) -> Any:
        return self._list_accounts(*args)
    
    
    _list_wallets: Method[Callable[..., Any]] = Method(
        namespace + "_listWallets", mungers=[default_root_munger]
    )

    def list_wallets(self, *args) -> Any:
        return self._list_wallets(*args)
    
    
    _lock_account: Method[Callable[..., Any]] = Method(
        namespace + "_lockAccount", mungers=[default_root_munger]
    )

    def lock_account(self, *args) -> Any:
        return self._lock_account(*args)
    
    
    _new_account: Method[Callable[..., Any]] = Method(
        namespace + "_newAccount", mungers=[default_root_munger]
    )

    def new_account(self, *args) -> Any:
        return self._new_account(*args)
    
    
    _open_wallet: Method[Callable[..., Any]] = Method(
        namespace + "_openWallet", mungers=[default_root_munger]
    )

    def open_wallet(self, *args) -> Any:
        return self._open_wallet(*args)
    
    
    _replace_raw_key: Method[Callable[..., Any]] = Method(
        namespace + "_replaceRawKey", mungers=[default_root_munger]
    )

    def replace_raw_key(self, *args) -> Any:
        return self._replace_raw_key(*args)
    
    
    _send_account_update: Method[Callable[..., Any]] = Method(
        namespace + "_sendAccountUpdate", mungers=[default_root_munger]
    )

    def send_account_update(self, *args) -> Any:
        return self._send_account_update(*args)
    
    
    _send_transaction: Method[Callable[..., Any]] = Method(
        namespace + "_sendTransaction", mungers=[default_root_munger]
    )

    def send_transaction(self, *args) -> Any:
        return self._send_transaction(*args)
    
    
    _send_value_transfer: Method[Callable[..., Any]] = Method(
        namespace + "_sendValueTransfer", mungers=[default_root_munger]
    )

    def send_value_transfer(self, *args) -> Any:
        return self._send_value_transfer(*args)
    
    
    _sign: Method[Callable[..., Any]] = Method(
        namespace + "_sign", mungers=[default_root_munger]
    )

    def sign(self, *args) -> Any:
        return self._sign(*args)
    
    
    _sign_transaction: Method[Callable[..., Any]] = Method(
        namespace + "_signTransaction", mungers=[default_root_munger]
    )

    def sign_transaction(self, *args) -> Any:
        return self._sign_transaction(*args)
    
    
    _unlock_account: Method[Callable[..., Any]] = Method(
        namespace + "_unlockAccount", mungers=[default_root_munger]
    )

    def unlock_account(self, *args) -> Any:
        return self._unlock_account(*args)
    

class AsyncPersonalApi(AsyncGethPersonal):
    is_async = True
    namespace = "personal"
    
    
    _derive_account: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_deriveAccount", mungers=[default_root_munger]
    )

    async def derive_account(self, *args) -> Any:
        return await self._derive_account(*args)
    
    
    _ec_recover: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_ecRecover", mungers=[default_root_munger]
    )

    async def ec_recover(self, *args) -> Any:
        return await self._ec_recover(*args)
    
    
    _import_raw_key: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_importRawKey", mungers=[default_root_munger]
    )

    async def import_raw_key(self, *args) -> Any:
        return await self._import_raw_key(*args)
    
    
    _list_accounts: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_listAccounts", mungers=[default_root_munger]
    )

    async def list_accounts(self, *args) -> Any:
        return await self._list_accounts(*args)
    
    
    _list_wallets: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_listWallets", mungers=[default_root_munger]
    )

    async def list_wallets(self, *args) -> Any:
        return await self._list_wallets(*args)
    
    
    _lock_account: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_lockAccount", mungers=[default_root_munger]
    )

    async def lock_account(self, *args) -> Any:
        return await self._lock_account(*args)
    
    
    _new_account: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_newAccount", mungers=[default_root_munger]
    )

    async def new_account(self, *args) -> Any:
        return await self._new_account(*args)
    
    
    _open_wallet: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_openWallet", mungers=[default_root_munger]
    )

    async def open_wallet(self, *args) -> Any:
        return await self._open_wallet(*args)
    
    
    _replace_raw_key: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_replaceRawKey", mungers=[default_root_munger]
    )

    async def replace_raw_key(self, *args) -> Any:
        return await self._replace_raw_key(*args)
    
    
    _send_account_update: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_sendAccountUpdate", mungers=[default_root_munger]
    )

    async def send_account_update(self, *args) -> Any:
        return await self._send_account_update(*args)
    
    
    _send_transaction: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_sendTransaction", mungers=[default_root_munger]
    )

    async def send_transaction(self, *args) -> Any:
        return await self._send_transaction(*args)
    
    
    _send_value_transfer: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_sendValueTransfer", mungers=[default_root_munger]
    )

    async def send_value_transfer(self, *args) -> Any:
        return await self._send_value_transfer(*args)
    
    
    _sign: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_sign", mungers=[default_root_munger]
    )

    async def sign(self, *args) -> Any:
        return await self._sign(*args)
    
    
    _sign_transaction: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_signTransaction", mungers=[default_root_munger]
    )

    async def sign_transaction(self, *args) -> Any:
        return await self._sign_transaction(*args)
    
    
    _unlock_account: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_unlockAccount", mungers=[default_root_munger]
    )

    async def unlock_account(self, *args) -> Any:
        return await self._unlock_account(*args)
    
