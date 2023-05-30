from base.testing import KlaytnBaseTesting


class TestEthNewPendingTransactionFilter(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.new_pending_transaction_filter()
        self.assertResponseSuccess()
