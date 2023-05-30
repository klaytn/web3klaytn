from base.testing import KlaytnBaseTesting


class TestLowerBoundGasPrice(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.lower_bound_gas_price()
        self.assertResponseSuccess()
