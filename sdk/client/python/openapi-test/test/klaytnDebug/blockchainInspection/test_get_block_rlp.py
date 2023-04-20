from base.testing import KlaytnBaseTesting


class TestDebugGetBlockRlp(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "latest"

    def test_post(self):
        debug_response = self.sdk.debug.get_block_rlp(
            self.blockHash
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.get_block_rlp()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
