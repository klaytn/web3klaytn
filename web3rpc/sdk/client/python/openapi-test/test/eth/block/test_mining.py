from base.testing import KlaytnBaseTesting


class TestEthMining(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.mining
        self.assertIsInstance(self.response, bool)
