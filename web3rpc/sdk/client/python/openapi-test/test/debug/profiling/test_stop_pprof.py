from base.testing import KlaytnBaseTesting


class TestStopPProf(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.debug.stop_p_prof()
        self.assertIsNone(self.response)
