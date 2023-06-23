from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3.middleware import construct_sign_and_send_raw_middleware
from contract_deploy_with_legacy import contract_deploy_with_legacy

acc_list = [
    Account.from_key('0x8b0164c3a59d2b1a00a9934f85ae77c14e21094132c34cc3daacd9e632c90807'),
    Account.from_key('0x2380a434b66b5b3ff095632b098055e52fa85ca34517ff8ec504b428f4a81f76'),
]
w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8551'))
# w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))
w3.middleware_onion.add(construct_sign_and_send_raw_middleware(acc_list))

def contract_interaction_with_legacy():
    user = Account.from_key('0x8b0164c3a59d2b1a00a9934f85ae77c14e21094132c34cc3daacd9e632c90807')
    addr, abi = contract_deploy_with_legacy()
    c = w3.eth.contract(address=addr, abi=abi)

    # call view function
    print('\ncurrent message : ' + c.functions.sayHelloWorld().call())
    
    # with legacy transaction
    tx_hash = c.functions.update("Klaytn HelloWorld with legacy tx").transact({
        'from':user.address
    })
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    print(tx_receipt)
    print('\nchanged message : '+c.functions.sayCustomMsg().call())

contract_interaction_with_legacy()