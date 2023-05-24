from base.testing import KlaytnBaseTesting


class TestDebugIsPProfRunning(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.is_p_prof_running()
        self.assertResponseSuccess()
