from base.testing import KlaytnBaseTesting


class TestEthGetBlockTransactionCountByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockNumber = "0xe8"

    def test_post(self):
        eth_response = self.sdk.eth.get_block_transaction_count_by_number(
            self.blockNumber
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.get_block_transaction_count_by_number()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
