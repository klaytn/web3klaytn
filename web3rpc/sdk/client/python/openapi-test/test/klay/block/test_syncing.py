from base.testing import KlaytnBaseTesting


class TestKlaySyncing(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.syncing()
        self.assertResponseSuccess()
