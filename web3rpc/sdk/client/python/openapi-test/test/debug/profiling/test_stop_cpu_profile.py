from base.testing import KlaytnBaseTesting


class TestStopCPUProfile(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.debug.stop_cpu_profile()
        self.assertIsNone(self.response)
