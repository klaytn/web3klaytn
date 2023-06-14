from base.testing import KlaytnBaseTesting


class TestEthGetBlockTransactionCountByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x0c11803ab36110db993e7520908b9ba9336cca2f2dcc9b6130c481a3ccdc2621"

    def test_post(self):
        self.response = self.w3.eth.get_block_transaction_count(
            self.blockHash
        )
        self.assertIsInstance(self.response, int)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_block_transaction_count_by_hash()

