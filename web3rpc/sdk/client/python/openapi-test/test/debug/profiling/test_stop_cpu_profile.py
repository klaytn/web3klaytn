from base.testing import KlaytnBaseTesting


class TestStopCPUProfile(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.stop_cpu_profile()
        self.assertResponseSuccess()
