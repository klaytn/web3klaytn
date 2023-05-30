from base.testing import KlaytnBaseTesting


class TestStatus(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.txpool.status()
        self.assertResponseSuccess()
