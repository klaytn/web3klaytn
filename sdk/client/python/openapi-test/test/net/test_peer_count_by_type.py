from base.testing import KlaytnBaseTesting


class TestNetPeerCountByType(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.net.peer_count_by_type()
        self.assertResponseSuccess()
