from base.testing import KlaytnBaseTesting


class TestKlayGetBlockTransactionCountByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0xe8"

    def test_post(self):
        self.response = self.w3.klay.get_block_transaction_count_by_number(
            self.blockTag
        )
        self.assertIsInstance(self.response, str)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_block_transaction_count_by_number()
