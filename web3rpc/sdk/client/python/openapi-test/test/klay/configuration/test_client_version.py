from base.testing import KlaytnBaseTesting


class TestKlayClientVersion(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.client_version()

        self.assertResponseSuccess()
