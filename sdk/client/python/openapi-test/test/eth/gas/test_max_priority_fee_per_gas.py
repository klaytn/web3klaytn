from base.testing import KlaytnBaseTesting


class TestMaxPriorityFeePerGas(KlaytnBaseTesting):

    def test_post(self):
        eth_response = self.sdk.eth.max_priority_fee_per_gas()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
