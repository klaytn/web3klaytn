from base.testing import KlaytnBaseTesting


class TestEthGetUncleCountByBlockNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0xe8"

    def test_post(self):
        eth_response = self.sdk.eth.get_uncle_count_by_block_number(
            self.blockTag
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.get_uncle_count_by_block_number()
        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
