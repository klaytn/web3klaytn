#-*- coding:utf-8 -*-
from eth_account import Account
from eth_account.messages import encode_defunct
from eth_utils.curried import to_hex
from web3py_ext import extend

def web3_integration_test():
    acc = Account.from_key_pair(
        '0x912638E1C201C3e1fFAc14bb720cC4944e7A6d47',
        '0x2300c0255fbe8cee1392db4c93d6059ca88a7453ee1bb1a67ef1b1ccfa11932b'
    )
    message_text = "I♥KLAYTN"
    msghash = encode_defunct(text=message_text)
    signature = Account.sign_message(msghash, acc.key)

    recovered_msg = Account.recover_message(msghash, signature=signature.signature)
    print('account:\n . address:', acc.address, '\n . privkey:', to_hex(acc.key))
    print('\n')
    print('recovered message', recovered_msg)

web3_integration_test()