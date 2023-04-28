from base.testing import KlaytnBaseTesting


class TestNetPeerCount(KlaytnBaseTesting):

    def test_post(self):
        net_response = self.sdk.net.peer_count()
        
        self.covert_response(net_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
