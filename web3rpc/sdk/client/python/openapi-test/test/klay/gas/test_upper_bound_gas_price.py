from base.testing import KlaytnBaseTesting


class TestUpperBoundGasPrice(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.upper_bound_gas_price()
        self.assertResponseSuccess()
