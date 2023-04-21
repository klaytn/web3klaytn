from base.testing import KlaytnBaseTesting


class TestDebugMetrics(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.raw = True

    def test_post(self):
        debug_response = self.sdk.debug.metrics(
            self.raw
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.metrics()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
