from base.testing import KlaytnBaseTesting


class TestPendingTransactions(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.pending_transactions()
        self.assertResponseSuccess()
