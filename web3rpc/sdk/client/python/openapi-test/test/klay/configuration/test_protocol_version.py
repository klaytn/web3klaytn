from base.testing import KlaytnBaseTesting


class TestProtocolVersion(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.protocol_version()
        self.assertResponseSuccess()
