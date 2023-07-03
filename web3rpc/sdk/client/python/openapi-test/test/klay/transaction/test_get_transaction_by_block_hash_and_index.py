from base.testing import KlaytnBaseTesting


class TestGetTransactionByBlockHashAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x4c4cbf242a80183d2ea2daf047c578d5fc89c0b14c4262606c8b6bb0b36715be"
        self.transactionIndexPosition = "0x0"

    def test_post(self):
        self.response = self.w3.klay.get_transaction_by_block_hash_and_index(
            self.blockHash, self.transactionIndexPosition
        )
        self.assertRegex(self.response["blockHash"], r'^0x.*$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_transaction_by_block_hash_and_index()

