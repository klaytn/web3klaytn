from base.testing import KlaytnBaseTesting


class TestGetTransactionReceipt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        # self.blockHash = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"
        self.transactionHash = "0x0a83919ee23b96cb093012df861e53a6964d92a66ead837f8fc2b146da9b1831"

    def test_post(self):
        self.response = self.w3.eth.get_transaction_receipt(
            self.transactionHash
        )
        if self.response is not None:
            self.assertIsInstance(self.response["blockHash"], bytes)
        else:
            self.assertIsNone(self.response)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_transaction_receipt()

