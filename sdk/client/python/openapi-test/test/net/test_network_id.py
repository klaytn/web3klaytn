from base.testing import KlaytnBaseTesting


class TestNetNetworkID(KlaytnBaseTesting):

    def test_post(self):
        net_response = self.sdk.net.network_id()
        
        self.covert_response(net_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
