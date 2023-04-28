from base.testing import KlaytnBaseTesting


class TestLowerBoundGasPrice(KlaytnBaseTesting):

    def test_post(self):
        klay_response = self.sdk.klay.lower_bound_gas_price()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
