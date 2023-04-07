from base.testing import KlaytnBaseTesting


class TestGetTransactionByBlockHashAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68"
        self.transactionIndexPosition = "0x0"

    def test_post(self):
        eth_response = self.sdk.eth.get_transaction_by_block_hash_and_index(
            self.blockHash, self.transactionIndexPosition
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.get_transaction_by_block_hash_and_index(self.blockHash)

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
