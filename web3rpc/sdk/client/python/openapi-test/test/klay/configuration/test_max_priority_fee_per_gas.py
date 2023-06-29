from base.testing import KlaytnBaseTesting


class TestMaxPriorityFeePerGas(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.max_priority_fee_per_gas()
        self.assertIsInstance(self.response, str)
