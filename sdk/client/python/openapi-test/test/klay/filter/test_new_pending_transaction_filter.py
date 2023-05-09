from base.testing import KlaytnBaseTesting


class TestNewPendingTransactionFilter(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.new_pending_transaction_filter()
        self.assertResponseSuccess()
