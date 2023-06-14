from base.testing import KlaytnBaseTesting


class TestNetListening(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.net.listening
        self.assertIsInstance(self.response, bool)
