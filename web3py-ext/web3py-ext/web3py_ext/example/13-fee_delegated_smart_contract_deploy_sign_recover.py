from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3py_ext.transaction.transaction import (
    empty_tx,
    fill_transaction,
    TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_DEPLOY
)
from web3py_ext.utils.klaytn_utils import to_pretty
from cytoolz import merge

w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8551'))
# w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))

def web3_fee_delegated_smart_contract_deploy_sign_recover():
    user1 = Account.from_key('0x8b0164c3a59d2b1a00a9934f85ae77c14e21094132c34cc3daacd9e632c90807') 
    fee_delegator = Account.from_key('0x2380a434b66b5b3ff095632b098055e52fa85ca34517ff8ec504b428f4a81f76')
    smart_contract_deploy_tx = empty_tx(TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_DEPLOY)
    smart_contract_deploy_tx = merge(smart_contract_deploy_tx, {
        'from' : user1.address,
        'gas' : 100000,
        'data' : '0x608060405234801561001057600080fd5b50610173806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806345773e4e14610030575b600080fd5b61003861004e565b604051610045919061011b565b60405180910390f35b60606040518060400160405280600b81526020017f48656c6c6f20576f726c64000000000000000000000000000000000000000000815250905090565b600081519050919050565b600082825260208201905092915050565b60005b838110156100c55780820151818401526020810190506100aa565b60008484015250505050565b6000601f19601f8301169050919050565b60006100ed8261008b565b6100f78185610096565b93506101078185602086016100a7565b610110816100d1565b840191505092915050565b6000602082019050818103600083015261013581846100e2565b90509291505056fea264697066735822122098dee729b2ae1c3fd3f534bf7d480c78ba0c9b62b15c7b5c578b29d70a747a5164736f6c63430008120033',
    })
    smart_contract_deploy_tx = fill_transaction(smart_contract_deploy_tx, w3)
    # sign the klaytn specific transaction type with web3py
    signed_tx = Account.sign_transaction(smart_contract_deploy_tx, user1.key)
    print("\nraw transaction of signed tx:", signed_tx.rawTransaction.hex())
    
    recovered_tx = Account.recover_transaction(signed_tx.rawTransaction)
    print("\nrecovered sender address", recovered_tx)
    
    feepayer_signed_tx = Account.sign_transaction_as_feepayer(signed_tx.rawTransaction, fee_delegator.address, fee_delegator.key)
    print("\nraw transaction of feePayer signed tx:", feepayer_signed_tx.rawTransaction.hex())
    
    feepayer_recovered_tx = Account.recover_transaction_as_feepayer(feepayer_signed_tx.rawTransaction)
    print("recovered feepayer address:", feepayer_recovered_tx)
    
    decoded_tx = Account.decode_transaction(feepayer_signed_tx.rawTransaction)
    print("\ndecoded transaction:", to_pretty(decoded_tx))

    # temp test
    # tx_hash = w3.eth.send_raw_transaction(signed_tx.rawTransaction)
    # tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    # print('tx hash: ', tx_hash, 'receipt: ', tx_receipt)

web3_fee_delegated_smart_contract_deploy_sign_recover()