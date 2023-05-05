from base.testing import KlaytnBaseTesting


class TestNetListening(KlaytnBaseTesting):

    def test_post(self):
        net_response = self.sdk.net.listening()
        
        self.covert_response(net_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
