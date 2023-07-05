from base.testing import KlaytnBaseTesting


class TestEthProtocolVersion(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.protocol_version
        self.assertIsInstance(self.response, str)
