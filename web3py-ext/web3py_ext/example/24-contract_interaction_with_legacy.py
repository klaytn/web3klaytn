from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3.middleware import construct_sign_and_send_raw_middleware
from contract_deploy_with_legacy import contract_deploy_with_legacy

acc_list = [
    Account.from_key('0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8')
]
w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))
w3.middleware_onion.add(construct_sign_and_send_raw_middleware(acc_list))

def contract_interaction_with_legacy():
    user = Account.from_key('0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8')
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

# contract_interaction_with_legacy()

def contract_interaction():
    user = Account.from_key('0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8')
    c = w3.eth.contract(
      address="0x3dC1dA8F305A8919750a5CA3A50bBA78914691DC",
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
        }
      ]
    )

    # call view function
    print('\ncurrent message : ' + c.functions.sayHelloWorld().call())

    # with legacy transaction
    tx_hash = c.functions.update("Klaytn HelloWorld with legacy tx").transact({
        'from':user.address
    })
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    print(tx_receipt)
    print('\nchanged message : '+c.functions.sayCustomMsg().call())

contract_interaction()