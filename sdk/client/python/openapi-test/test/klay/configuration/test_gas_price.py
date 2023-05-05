from base.testing import KlaytnBaseTesting


class TestGasPrice(KlaytnBaseTesting):

    def test_post(self):
        klay_response = self.sdk.klay.gas_price()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
