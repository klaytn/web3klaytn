from base.testing import KlaytnBaseTesting
from web3._utils.filters import Filter


class TestEthNewBlockFilter(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.filter('latest')
        self.assertIsInstance(self.response, Filter)
