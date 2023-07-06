from base.testing import KlaytnBaseTesting


class TestStopWarmUp(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.debug.stop_warm_up()
        self.assertIsNone(self.response)
