from base.testing import KlaytnBaseTesting


class TestStartWarmUp(KlaytnBaseTesting):

    def test_post(self):
        debug_response = self.sdk.debug.start_warm_up()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
