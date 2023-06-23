
from typing import Any, Callable, Collection, Union
from web3 import Web3
from web3.middleware.signing import (
    _PrivateKey,
    gen_normalized_accounts,
    format_transaction,
    fill_transaction_defaults,
    fill_nonce,
)
from web3.types import (
    Middleware,
    RPCEndpoint,
    RPCResponse,
)
from eth_utils.toolz import (
    compose,
)

def construct_sign_and_send_raw_middleware(
    private_key_or_account: Union[_PrivateKey, Collection[_PrivateKey]]
) -> Middleware:
    """Capture transactions sign and send as raw transactions

    Keyword arguments:
    private_key_or_account -- A single private key or a tuple,
    list or set of private keys. Keys can be any of the following formats:
      - An eth_account.LocalAccount object (klaytn extended key, decoupled address-privateKey is possible)
      - An eth_keys.PrivateKey object
      - A raw private key as a hex string or byte string
    """
    accounts = gen_normalized_accounts(private_key_or_account)

    def sign_and_send_raw_middleware(
        make_request: Callable[[RPCEndpoint, Any], Any], w3: "Web3"
    ) -> Callable[[RPCEndpoint, Any], RPCResponse]:
        format_and_fill_tx = compose(
            format_transaction, fill_transaction_defaults(w3), fill_nonce(w3)
        )

        def middleware(method: RPCEndpoint, params: Any) -> RPCResponse:
            if method != "eth_sendTransaction":
                return make_request(method, params)
            else:
                transaction = format_and_fill_tx(params[0])

            if "from" not in transaction:
                return make_request(method, params)
            elif transaction.get("from") not in accounts:
                return make_request(method, params)

            account = accounts[transaction["from"]]
            raw_tx = account.sign_transaction(transaction).rawTransaction

            return make_request(RPCEndpoint("eth_sendRawTransaction"), [raw_tx])

        return middleware
    
    return sign_and_send_raw_middleware