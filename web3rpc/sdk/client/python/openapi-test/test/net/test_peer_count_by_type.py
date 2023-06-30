from base.testing import KlaytnBaseTesting


class TestNetPeerCountByType(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.net.peer_count_by_type()
        self.assertIsInstance(self.response["total"], int)
