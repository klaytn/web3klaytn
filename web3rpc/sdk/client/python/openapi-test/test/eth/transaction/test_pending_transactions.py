from base.testing import KlaytnBaseTesting
from unittest import skip


class TestPendingTransactions(KlaytnBaseTesting):

    @skip
    def test_post(self):
        self.response = self.w3.eth.get_transaction('pending')
        self.assertTrue(len(self.response) >= 0)
