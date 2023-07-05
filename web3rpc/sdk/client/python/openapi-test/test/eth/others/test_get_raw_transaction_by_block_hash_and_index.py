from base.testing import KlaytnBaseTesting


class TestGetRawTransactionByBlockHashAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        # self.blockHash = "0xf1b4df5d4457d4771740887eeb46de3fc26ae4cddf93d69b1b237c2366ff12eb"
        self.blockHash = "0x8d1819d9f12f263422016334f17619dc072cad92d4f2e548708865ec660fc954"
        self.index = "0x0"

    def test_post(self):
        self.response = self.w3.eth.get_raw_transaction_by_block(
            self.blockHash, self.index
        )
        self.assertIsInstance(self.response, bytes)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_raw_transaction_by_block_hash_and_index()

