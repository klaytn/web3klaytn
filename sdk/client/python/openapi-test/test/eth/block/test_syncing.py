from base.testing import KlaytnBaseTesting


class TestEthSyncing(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.syncing()
        self.assertResponseSuccess()
