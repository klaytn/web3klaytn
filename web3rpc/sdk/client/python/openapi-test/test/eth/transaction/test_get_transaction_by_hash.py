from base.testing import KlaytnBaseTesting


class TestGetTransactionByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x0a83919ee23b96cb093012df861e53a6964d92a66ead837f8fc2b146da9b1831"

    def test_post(self):
        self.response = self.w3.eth.get_transaction(
            self.blockHash
        )
        if self.response is not None:
            self.assertIsInstance(self.response["blockHash"], bytes)
        else:
            self.assertIsNone(self.response)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_transaction_by_hash()

