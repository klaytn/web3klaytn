from base.testing import KlaytnBaseTesting


class TestEthGetUncleCountByBlockHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a"

    def test_post(self):
        eth_response = self.sdk.eth.get_uncle_count_by_block_hash(
            self.blockHash
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.get_uncle_count_by_block_hash()
        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
