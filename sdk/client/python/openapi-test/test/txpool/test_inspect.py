from base.testing import KlaytnBaseTesting


class TestInspect(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.txpool.inspect()
        self.assertResponseSuccess()
