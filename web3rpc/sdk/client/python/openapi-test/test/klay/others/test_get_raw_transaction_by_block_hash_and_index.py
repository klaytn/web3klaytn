from base.testing import KlaytnBaseTesting


class TestGetRawTransactionByBlockHashAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x29b6cd965c7d9a53a6f068da259dce1d3810ba79fff8eebac5d4da14754e67e6"
        self.index = "0x20965255"

    def test_post(self):
        self.response = self.w3.klay.get_raw_transaction_by_block_hash_and_index(
            self.blockHash, self.index
        )
        self.assertRegex(self.response, r'^0x.*$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_raw_transaction_by_block_hash_and_index(self.blockHash)

