from base.testing import KlaytnBaseTesting


class TestKlaySyncing(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.syncing()
        self.assertIsInstance(self.response, bool)
