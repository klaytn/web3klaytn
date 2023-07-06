#-*- coding:utf-8 -*-
from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3py_ext.transaction.transaction import (
    fill_transaction,
    TX_TYPE_SMART_CONTRACT_EXECUTION
)
from contract_deploy_with_legacy import contract_deploy_with_legacy

w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))

def contract_interaction_with_klaytn_type():
    user = Account.from_key('0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8')
    addr, abi = contract_deploy_with_legacy()
    c = w3.eth.contract(address=addr, abi=abi)

    # call view function
    print('\ncurrent message : ' + c.functions.sayHelloWorld().call())
    
    # with fee delegation smart contract execution type
    tx = c.functions.update("Klaytn HelloWorld with klaytn type tx").build_transaction({
        "type":TX_TYPE_SMART_CONTRACT_EXECUTION,
        "from":user.address,
    })
    tx = fill_transaction(tx, w3)
    user_signed_tx = Account.sign_transaction(tx, user.key)
    tx_hash = w3.eth.send_raw_transaction(user_signed_tx.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    print(tx_receipt)
    print('\nchanged message : '+c.functions.sayCustomMsg().call())

contract_interaction_with_klaytn_type()