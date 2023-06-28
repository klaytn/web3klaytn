
from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3py_ext.transaction.transaction import (
    empty_tx,
    fill_transaction,
    TX_TYPE_FEE_DELEGATED_CANCEL
)
from web3py_ext.utils.klaytn_utils import to_pretty
from cytoolz import merge

w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8551'))
# w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))

def web3_fee_delegated_cancel_sign_recover():
    user1 = Account.from_key('0x8b0164c3a59d2b1a00a9934f85ae77c14e21094132c34cc3daacd9e632c90807')
    fee_delegator = Account.from_key('0x2380a434b66b5b3ff095632b098055e52fa85ca34517ff8ec504b428f4a81f76')

    cancel_tx = empty_tx(TX_TYPE_FEE_DELEGATED_CANCEL)
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

    feepayer_signed_tx = Account.sign_transaction_as_feepayer(signed_tx.rawTransaction, fee_delegator.address, fee_delegator.key)
    print("\nraw transaction of feePayer signed tx:", feepayer_signed_tx.rawTransaction.hex())
    
    feepayer_recovered_tx = Account.recover_transaction_as_feepayer(feepayer_signed_tx.rawTransaction)
    print("recovered feepayer address:", feepayer_recovered_tx)
    
    decoded_tx = Account.decode_transaction(feepayer_signed_tx.rawTransaction)
    print("\ndecoded transaction:", to_pretty(decoded_tx))

web3_fee_delegated_cancel_sign_recover()