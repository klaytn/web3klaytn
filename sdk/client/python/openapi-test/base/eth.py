import json
from opensdk.sdk import OpenSDK
from base.constants import KLAYTN_URL

sdk = OpenSDK(KLAYTN_URL)
address = "0x487f2dfef230c2120b8cc55c5087b103146536ec"

def create_new_filter():
    filterOptions = {
        "fromBlock": "earliest",
        "toBlock": "latest",
        "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
        "topics": ["0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8"]
    }

    eth_response = sdk.eth.new_filter(filterOptions)

    return json.loads(eth_response.response.data)["result"]


def unlock_account():
    passphrase = "helloWorld"
    duration = 30

    # unlock_account for address
    sdk.personal.unlock_account(address, passphrase, duration)

    return address


def getNonce():
    eth_response = sdk.eth.get_transaction_count(address, "latest")

    return json.loads(eth_response.response.data)["result"]


def getFeePayerSignatures(tx):
    klay_response = sdk.klay.sign_transaction(tx)

    return json.loads(klay_response.response.data)["result"]["tx"]
