from base.testing import KlaytnBaseTesting


class TestContent(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.txpool.content()
        self.assertResponseSuccess()
