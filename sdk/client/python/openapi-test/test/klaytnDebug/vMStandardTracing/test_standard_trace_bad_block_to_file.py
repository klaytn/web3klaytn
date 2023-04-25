from base.testing import KlaytnBaseTesting


class TestStandardTraceBadBlockToFile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6"

    def test_post(self):
        debug_response = self.sdk.debug.standard_trace_bad_block_to_file(
            self.blockHash
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.standard_trace_bad_block_to_file()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
