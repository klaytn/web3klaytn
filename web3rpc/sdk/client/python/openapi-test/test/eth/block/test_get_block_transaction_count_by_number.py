from base.testing import KlaytnBaseTesting


class TestEthGetBlockTransactionCountByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockNumber = "0xe8"

    def test_post(self):
        self.response = self.w3.eth.get_block_transaction_count(
            self.blockNumber
        )
        self.assertIsInstance(self.response, int)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_block_transaction_count_by_number()

