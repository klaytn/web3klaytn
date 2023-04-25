from base.testing import KlaytnBaseTesting


class TestTraceTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.txHash = "0x07f6057bc93aca52e53cdbfac9b9830f6a9cae2b3f48f0b47e4cb54959143d09"

    def test_post(self):
        debug_response = self.sdk.debug.trace_transaction(
            self.txHash
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.trace_transaction()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
