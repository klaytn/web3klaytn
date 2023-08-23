from base.testing import KlaytnBaseTesting
from web3._utils.filters import Filter


class TestEthNewPendingTransactionFilter(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.filter('pending')
        self.assertIsInstance(self.response, Filter)
