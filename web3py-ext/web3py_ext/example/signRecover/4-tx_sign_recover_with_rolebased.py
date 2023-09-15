#-*- coding:utf-8 -*-
from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3py_ext.transaction.transaction import (
    empty_tx,
    fill_transaction,
    TX_TYPE_VALUE_TRANSFER
)
from cytoolz import merge

w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))

def web3_tx_sign_recover_multisig():
    txRoleUser = Account.from_key_pair(
        '0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea',
        '0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac'
    )
    value_transfer_tx = empty_tx(TX_TYPE_VALUE_TRANSFER)
    value_transfer_tx = merge(value_transfer_tx, {
        'from' : txRoleUser.address,
        'to' : txRoleUser.address,
        'value' : Web3.to_peb(10, "klay"),
    })
    value_transfer_tx = fill_transaction(value_transfer_tx, w3)
    signed_tx = Account.sign_transaction(value_transfer_tx, txRoleUser.key)
    
    recovered = w3.klay.recover_from_transaction(signed_tx.rawTransaction.hex(), "latest")
    print("\nsender", txRoleUser.address, "\nrecovered", recovered)

web3_tx_sign_recover_multisig()