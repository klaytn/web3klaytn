from base.testing import KlaytnBaseTesting


class TestGasPrice(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.gas_price()
        self.assertRegex(self.response, r'^0x.*$')
