from base.testing import KlaytnBaseTesting


class TestNetVersion(KlaytnBaseTesting):

    def test_post(self):
        net_response = self.sdk.net.version()
        
        self.covert_response(net_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
