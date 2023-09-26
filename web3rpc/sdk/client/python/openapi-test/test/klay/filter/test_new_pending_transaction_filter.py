from base.testing import KlaytnBaseTesting


class TestNewPendingTransactionFilter(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.new_pending_transaction_filter()
        self.assertRegex(self.response, r'^0x.*$')
