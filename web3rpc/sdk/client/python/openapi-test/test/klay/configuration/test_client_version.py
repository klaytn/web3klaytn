from base.testing import KlaytnBaseTesting


class TestKlayClientVersion(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.client_version()
        self.assertTrue(self.response, str)
