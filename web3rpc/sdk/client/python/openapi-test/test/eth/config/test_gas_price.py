from base.testing import KlaytnBaseTesting


class TestGasPrice(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.gas_price
        self.assertIsInstance(self.response, int)
