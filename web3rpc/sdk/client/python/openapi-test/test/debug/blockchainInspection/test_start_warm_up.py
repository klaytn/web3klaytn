from base.testing import KlaytnBaseTesting


class TestStartWarmUp(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.start_warm_up()
        self.assertResponseSuccess()
