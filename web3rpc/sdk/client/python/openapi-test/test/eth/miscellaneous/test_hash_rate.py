from base.testing import KlaytnBaseTesting


class TestEthHashRate(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.hashrate()
        self.assertResponseSuccess()
