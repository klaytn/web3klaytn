#-*- coding:utf-8 -*-
from eth_account import Account
from eth_account.messages import encode_defunct
from eth_utils.curried import to_hex
from web3py_ext import extend

def web3_legacy_value_transfer_sign_recover():
    user = Account.from_key('0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8')
    message_text = "I♥KLAYTN"
    msghash = encode_defunct(text=message_text)
    signature = Account.sign_message(msghash, user.key)

    recovered = Account.recover_message(msghash, signature=signature.signature)
    print("\nsender", user.address, "\nrecovered", recovered)

web3_legacy_value_transfer_sign_recover()