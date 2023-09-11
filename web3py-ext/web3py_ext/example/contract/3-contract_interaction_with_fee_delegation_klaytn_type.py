#-*- coding:utf-8 -*-
from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3py_ext.transaction.transaction import (
    fill_transaction,
    TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_EXECUTION
)
from eth_utils.address import to_checksum_address

w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))

def contract_interaction_with_fee_delegation_klaytn_type():
    user = Account.from_key('0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8')
    fee_delegator = Account.from_key('0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4')
    
    # addr, abi = contract_deploy_with_legacy()
    c = w3.eth.contract(
        address=to_checksum_address("0x108bF12b50c9ef65525F0495C721aEc55015e111"), 
        abi=[{
            "inputs": [],
            "name": "sayCustomMsg",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sayHelloWorld",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "newMessage",
                    "type": "string"
                }
            ],
            "name": "update",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }]
    )

    # call view function
    print('\ncurrent message : ' + c.functions.sayHelloWorld().call())
    
    # with fee delegation smart contract execution type
    tx = c.functions.update("Klaytn HelloWorld with fee delegation klaytn type tx").build_transaction({
        "type":TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_EXECUTION,
        "from":user.address,
    })
    tx = fill_transaction(tx, w3)
    
    user_signed_tx = Account.sign_transaction(tx, user.key)
    feepayer_signed_tx = Account.sign_transaction_as_feepayer(
        user_signed_tx.rawTransaction,
        fee_delegator.address,
        fee_delegator.key
    )
    
    tx_hash = w3.eth.send_raw_transaction(feepayer_signed_tx.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    print(tx_receipt)
    print('\nchanged message : '+c.functions.sayCustomMsg().call())

contract_interaction_with_fee_delegation_klaytn_type()