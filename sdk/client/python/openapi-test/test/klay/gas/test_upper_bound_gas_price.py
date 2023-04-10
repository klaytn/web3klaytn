from base.testing import KlaytnBaseTesting


class TestUpperBoundGasPrice(KlaytnBaseTesting):

    def test_post(self):
        klay_response = self.sdk.klay.upper_bound_gas_price()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
