from base.testing import KlaytnBaseTesting


class TestEthSyncing(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.syncing
        self.assertIsInstance(self.response, bool)
