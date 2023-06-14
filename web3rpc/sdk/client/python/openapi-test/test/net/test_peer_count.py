from base.testing import KlaytnBaseTesting


class TestNetPeerCount(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.net.peer_count()
        self.assertIsInstance(self.response, int)
