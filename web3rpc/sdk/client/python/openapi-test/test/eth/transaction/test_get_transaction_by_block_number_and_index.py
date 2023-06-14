from base.testing import KlaytnBaseTesting


class TestGetRawTransactionByBlockNumberAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockNumber = 118593751
        self.index = "0x0"

    def test_post(self):
        self.response = self.w3.eth.get_raw_transaction_by_block(
            self.blockNumber, self.index
        )
        self.assertIsInstance(self.response, bytes)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_raw_transaction_by_block_number_and_index()

