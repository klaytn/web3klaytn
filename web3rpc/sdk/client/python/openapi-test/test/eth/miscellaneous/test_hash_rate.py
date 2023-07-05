from base.testing import KlaytnBaseTesting


class TestEthHashRate(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.hashrate
        self.assertIsInstance(self.response, int)
