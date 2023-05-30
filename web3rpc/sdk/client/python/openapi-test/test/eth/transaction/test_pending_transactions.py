from base.testing import KlaytnBaseTesting


class TestPendingTransactions(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.pending_transactions()
        self.assertResponseSuccess()
