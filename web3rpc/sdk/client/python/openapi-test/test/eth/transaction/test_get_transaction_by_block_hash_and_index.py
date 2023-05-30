from base.testing import KlaytnBaseTesting


class TestGetTransactionByBlockHashAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68"
        self.transactionIndexPosition = "0x0"

    def test_post(self):
        self.response = self.sdk.eth.get_transaction_by_block_hash_and_index(
            self.blockHash, self.transactionIndexPosition
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_transaction_by_block_hash_and_index(self.blockHash)
        self.assertErrorCodeMissingRequiredArgument()
