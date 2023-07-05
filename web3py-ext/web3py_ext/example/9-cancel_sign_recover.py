#-*- coding:utf-8 -*-
from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3py_ext.transaction.transaction import (
    empty_tx,
    fill_transaction,
    TX_TYPE_CANCEL
)
from web3py_ext.utils.klaytn_utils import to_pretty
from cytoolz import merge

w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))

def web3_cancel_sign_recover():
    user1 = Account.from_key('0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8')

    cancel_tx = empty_tx(TX_TYPE_CANCEL)
    cancel_tx = merge(cancel_tx, {
        'from' : user1.address,
    })
    cancel_tx = fill_transaction(cancel_tx, w3)

    # sign the klaytn specific transaction type with web3py
    signed_tx = Account.sign_transaction(cancel_tx, user1.key)
    print("\nraw transaction of signed tx:", signed_tx.rawTransaction.hex())

    recovered_tx = Account.recover_transaction(signed_tx.rawTransaction)
    print("\nrecovered sender address", recovered_tx)
    
    decoded_tx = Account.decode_transaction(signed_tx.rawTransaction)
    print("\ndecoded transaction:", to_pretty(decoded_tx))

web3_cancel_sign_recover()