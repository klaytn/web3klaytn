from base.testing import KlaytnBaseTesting


class TestNetPeerCount(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.net.peer_count()
        self.assertResponseSuccess()
