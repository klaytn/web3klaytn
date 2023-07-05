from base.testing import KlaytnBaseTesting


class TestMaxPriorityFeePerGas(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.max_priority_fee
        self.assertIsInstance(self.response, int)
