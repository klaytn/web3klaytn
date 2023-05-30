from base.testing import KlaytnBaseTesting


class TestNetVersion(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.net.version()
        self.assertResponseSuccess()
