from base.testing import KlaytnBaseTesting


class TestNetPeerCountByType(KlaytnBaseTesting):

    def test_post(self):
        net_response = self.sdk.net.peer_count_by_type()
        
        self.covert_response(net_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
