from base.testing import KlaytnBaseTesting
from base.eth import unlock_account
from eth_utils.address import to_checksum_address

class TestSendTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionObject = {
            # "from": unlock_account(),
            "from" : to_checksum_address("0xA1ee5975cfa2180450AeD555Ba06AB8108a87D4A"),
            "to": to_checksum_address("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee"),
            "value": "0x1",
            "gas": "0x9999",
            "maxFeePerGas": "0x5d21dba00",
            "maxPriorityFeePerGas": "0x5d21dba00"
        }

    def test_post(self):
        self.response = self.w3.eth.send_transaction(
            self.transactionObject
        )
        self.assertIsInstance(self.response, bytes)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.send_transaction()

