from base.testing import KlaytnBaseTesting


class TestTraceBlockByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x651722eb826af57fd95a2381c9cc0c162f90087d8283d02945c42b48229edf86"

    def test_post(self):
        debug_response = self.sdk.debug.trace_block_by_hash(
            self.blockHash
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.trace_block_by_hash()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
