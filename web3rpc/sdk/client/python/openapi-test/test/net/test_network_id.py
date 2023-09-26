from base.testing import KlaytnBaseTesting


class TestNetNetworkID(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.net.network_id()
        self.assertIsInstance(self.response, int)

