from base.testing import KlaytnBaseTesting


class TestDebugBacktraceAt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.location = "server.go:443"

    def test_post(self):
        debug_response = self.sdk.debug.backtrace_at(
            self.location
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.backtrace_at()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
