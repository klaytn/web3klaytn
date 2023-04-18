from base.testing import KlaytnBaseTesting


class TestStopPProf(KlaytnBaseTesting):

    def test_post(self):
        debug_response = self.sdk.debug.stop_p_prof()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
