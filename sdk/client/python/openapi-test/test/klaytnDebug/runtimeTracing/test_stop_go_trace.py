from base.testing import KlaytnBaseTesting


class TestStopGoTrace(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "go.trace"

    def test_post(self):
        debug_response = self.sdk.debug.stop_go_trace()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
