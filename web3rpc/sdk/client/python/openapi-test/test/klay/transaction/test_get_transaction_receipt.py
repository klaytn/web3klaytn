from base.testing import KlaytnBaseTesting


class TestTransactionByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionHash = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"

    def test_post(self):
        self.response = self.w3.klay.get_transaction_receipt(
            self.transactionHash
        )
        if self.response is not None:
            self.assertIsInstance(self.response["blockHash"], str)
        else:
            self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_transaction_receipt()
