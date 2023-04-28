from base.testing import KlaytnBaseTesting


class TestEthProtocolVersion(KlaytnBaseTesting):

    def test_post(self):
        eth_response = self.sdk.eth.protocol_version()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
