from base.testing import KlaytnBaseTesting


class TestStopPProf(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.stop_p_prof()
        self.assertResponseSuccess()
