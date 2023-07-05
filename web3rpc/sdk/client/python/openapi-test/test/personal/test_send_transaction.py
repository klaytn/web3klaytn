from base.testing import KlaytnBaseTesting
from eth_utils.address import to_checksum_address

class TestSendTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionObject = {
            "from": to_checksum_address("0x413ba0e5f6f00664598b5c80042b1308f4ff1408"),
            "to": to_checksum_address("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee"),
            "value": "0x1"
        }
        self.password = "helloWorld"

    def test_post(self):
        self.response = self.w3.geth.personal.send_transaction(
            self.transactionObject, self.password
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(IndexError):
            self.response = self.w3.geth.personal.send_transaction()

