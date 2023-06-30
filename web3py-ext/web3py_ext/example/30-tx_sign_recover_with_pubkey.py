from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3py_ext.transaction.transaction import (
    empty_tx,
    fill_transaction,
    TX_TYPE_LEGACY_TRANSACTION
)
from cytoolz import merge

# w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8551'))
w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))

def web3_legacy_value_transfer_sign_recover():
    user = Account.from_key_pair(
        '0xe15cd70a41dfb05e7214004d7d054801b2a2f06b',
        '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8'
    )

    value_transfer_tx = empty_tx(TX_TYPE_LEGACY_TRANSACTION)
    value_transfer_tx = merge(value_transfer_tx, {
        'from' : user.address,
        'to' : user.address,
        'value' : Web3.to_peb(10, "klay"),
    })
    value_transfer_tx = fill_transaction(value_transfer_tx, w3)
    signed_tx = Account.sign_transaction(value_transfer_tx, user.key)
    recovered_tx = Account.recover_transaction(signed_tx.rawTransaction)
    print("\nsender", user.address, "\nrecovered", recovered_tx)

web3_legacy_value_transfer_sign_recover()