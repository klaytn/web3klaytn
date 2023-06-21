from web3py_ext import extend
from web3 import Web3
from eth_account import Account
from web3py_ext.transaction.transaction import (
    empty_tx,
    fill_transaction,
    TX_TYPE_VALUE_TRANSFER
)
from web3py_ext.utils.klaytn_utils import (
    to_pretty,
)
from cytoolz import merge

w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8551'))
# w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))

def example_scenario_multisig_value_transfer():
    user1 = Account.from_key_pair(
        '0xB72b5c33629F6742a0553FE7c4C76B199f4C1d77',
        '0xd3973803956f7f08093097fa2c3712f5700c5c58f6d91d79b279a919bb120cc2'
        )
    user2 = Account.from_key_pair(
        '0xB72b5c33629F6742a0553FE7c4C76B199f4C1d77',
        '0xedb106f1dcd74b7fb55252051359b5b162f93de0fb8b5aa0c46319f864192c29'
        )
    user3 = Account.from_key_pair(
        '0xB72b5c33629F6742a0553FE7c4C76B199f4C1d77',
        '0x797d16ee04c7cec1cf1d4a536fd2dfed81af48d477df1f8409d75f50d91499f6'
        )
    
    value_transfer_tx = empty_tx(TX_TYPE_VALUE_TRANSFER)
    value_transfer_tx = merge(value_transfer_tx, {
        'from' : user1.address,
        'to' : '0xd61C2EDe41eC1182Cb249267BE0E6bF9a1c22222',
        'value' : Web3.to_peb(1, "klay"),
    })
    value_transfer_tx = fill_transaction(value_transfer_tx, w3)
    # sign the klaytn specific transaction type with web3py
    user1_signed_tx = Account.sign_transaction(value_transfer_tx, user1.key)
    user2_signed_tx = Account.sign_transaction(user1_signed_tx.rawTransaction, user2.key)
    user3_signed_tx = Account.sign_transaction(user2_signed_tx.rawTransaction, user3.key)

    decoded_tx = Account.decode_transaction(user3_signed_tx.rawTransaction)
    print("\ndecoded transaction:", to_pretty(decoded_tx))

    recovered = Account.klaytn_recover_transaction(user3_signed_tx.rawTransaction)
    print('recovered addresses', recovered)

    # tx_hash = w3.eth.send_raw_transaction(user3_signed_tx.rawTransaction)
    # tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    # print('tx hash: ', tx_hash, 'receipt: ', tx_receipt)

example_scenario_multisig_value_transfer()