import json
from opensdk.sdk import OpenSDK
from base.constants import KLAYTN_URL
from web3 import Web3


sdk = OpenSDK(KLAYTN_URL)
address = "0x413ba0e5f6f00664598b5c80042b1308f4ff1408"


def create_new_filter():
    filterOptions = {
        "fromBlock": "earliest",
        "toBlock": "latest",
        "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
        "topics": ["0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8"]
    }

    eth_response = sdk.eth.new_filter(filterOptions)

    return eth_response


def unlock_account():
    passphrase = "helloWorld"
    duration = 30

    # unlock_account for address
    sdk.personal.unlock_account(address, passphrase, duration)

    return address


def getNonce():
    eth_response = sdk.eth.get_transaction_count(address, "latest")

    return eth_response


def getFeePayerSignatures(tx):
    klay_response = sdk.klay.sign_transaction(tx)

    return klay_response["tx"]


def get_raw_transaction():
    web3 = Web3(Web3.HTTPProvider(KLAYTN_URL))

    private_key = "6cb442edb31d8a1c753f0c3c675588fceb4d82435a1c03b8bb92a5a9274ebbe0"
    from_address = "0xA1ee5975cfa2180450AeD555Ba06AB8108a87D4A"
    to_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
    gas_price = "0xba43b7400"
    gas_limit = 21000
    value = Web3.to_wei("0.001", "ether")
    nonce = web3.eth.get_transaction_count(from_address)

    tx = {
        "from": from_address,
        "to": to_address,
        "nonce": nonce,
        "gasPrice": gas_price,
        "gas": gas_limit,
        "value": value,
        "data": b""
    }
    signed_tx = web3.eth.account.sign_transaction(tx, private_key)
    return signed_tx.rawTransaction.hex()
