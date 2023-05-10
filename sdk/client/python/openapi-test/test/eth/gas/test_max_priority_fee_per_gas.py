from base.testing import KlaytnBaseTesting


class TestMaxPriorityFeePerGas(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.max_priority_fee_per_gas()
        self.assertResponseSuccess()
