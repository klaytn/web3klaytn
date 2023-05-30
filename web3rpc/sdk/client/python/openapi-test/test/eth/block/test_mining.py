from base.testing import KlaytnBaseTesting


class TestEthMining(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.mining()
        self.assertResponseSuccess()
