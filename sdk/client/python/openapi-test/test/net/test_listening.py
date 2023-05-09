from base.testing import KlaytnBaseTesting


class TestNetListening(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.net.listening()
        self.assertResponseSuccess()
