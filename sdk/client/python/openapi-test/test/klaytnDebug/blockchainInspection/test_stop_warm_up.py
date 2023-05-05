from base.testing import KlaytnBaseTesting


class TestStopWarmUp(KlaytnBaseTesting):

    def test_post(self):
        debug_response = self.sdk.debug.stop_warm_up()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
