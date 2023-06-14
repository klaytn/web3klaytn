from base.testing import KlaytnBaseTesting


class TestPendingTransactions(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.pending_transactions()
        self.assertResponseSuccess()
