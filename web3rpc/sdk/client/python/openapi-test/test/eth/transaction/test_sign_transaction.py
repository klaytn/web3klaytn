from base.testing import KlaytnBaseTesting
from base.eth import unlock_account, getNonce
from eth_utils.address import to_checksum_address


class TestSignTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionObject = {
            # "from": unlock_account(),
            # "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            "from" : to_checksum_address("0xA1ee5975cfa2180450AeD555Ba06AB8108a87D4A"),
            "to": to_checksum_address("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee"),
            "value": "0x1",
            "gas": "0x9999",
            "maxFeePerGas": "0x5d21dba00",
            "maxPriorityFeePerGas": "0x5d21dba00",
            "nonce": getNonce()
        }

    def test_post(self):
        self.response = self.w3.eth.sign_transaction(
            self.transactionObject
        )
        self.assertRegex(self.response["raw"], r'^0x.*$')

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.sign_transaction()

