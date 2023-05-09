from base.testing import KlaytnBaseTesting


class TestStopWarmUp(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.stop_warm_up()
        self.assertResponseSuccess()
