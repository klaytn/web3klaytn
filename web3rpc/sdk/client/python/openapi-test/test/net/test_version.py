from base.testing import KlaytnBaseTesting


class TestNetVersion(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.net.version
        self.assertResponseSuccess()
