from base.testing import KlaytnBaseTesting


class TestStopCPUProfile(KlaytnBaseTesting):

    def test_post(self):
        debug_response = self.sdk.debug.stop_cpu_profile()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
