from base.testing import KlaytnBaseTesting


class TestGetTransactionByBlocNumberAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x27"
        self.transactionIndex = "0x0"

    def test_post(self):
        self.response = self.w3.klay.get_transaction_by_block_number_and_index(
            self.blockTag, self.transactionIndex
        )
        if self.response is not None:
            self.assertRegex(self.response["blockHash"], r'^0x.*$')
        else:
            self.assertIsNone(self.response)


    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_transaction_by_block_number_and_index()
