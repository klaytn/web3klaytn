from base.testing import KlaytnBaseTesting
from base.eth import get_raw_transaction


class TestSendRawTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.signedTransactionData = get_raw_transaction()

    def test_post(self):
        self.response = self.w3.eth.send_raw_transaction(
            self.signedTransactionData
        )
        self.assertIsInstance(self.response, bytes)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.send_raw_transaction()

