from base.testing import KlaytnBaseTesting


class TestCoinBase(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.coinbase
        self.assertIsInstance(self.response, str)
