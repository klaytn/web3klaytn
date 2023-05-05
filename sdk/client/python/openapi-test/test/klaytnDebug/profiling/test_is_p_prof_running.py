from base.testing import KlaytnBaseTesting


class TestDebugIsPProfRunning(KlaytnBaseTesting):

    def test_post(self):
        debug_response = self.sdk.debug.is_p_prof_running()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
