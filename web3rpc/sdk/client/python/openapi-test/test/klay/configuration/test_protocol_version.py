from base.testing import KlaytnBaseTesting


class TestProtocolVersion(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.protocol_version()
        self.assertIsInstance(self.response, str)
