from base.testing import KlaytnBaseTesting


class TestEthProtocolVersion(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.protocol_version()
        self.assertResponseSuccess()
