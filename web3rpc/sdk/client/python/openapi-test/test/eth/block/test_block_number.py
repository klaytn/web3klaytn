from base.testing import KlaytnBaseTesting


class TestBlockNumber(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.block_number
        self.assertIsInstance(self.response, int)
