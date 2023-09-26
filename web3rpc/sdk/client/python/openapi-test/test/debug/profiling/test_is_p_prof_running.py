from base.testing import KlaytnBaseTesting


class TestDebugIsPProfRunning(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.debug.is_p_prof_running()
        self.assertIsInstance(self.response, bool)
