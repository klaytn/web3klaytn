from base.testing import KlaytnBaseTesting


class TestCoinBase(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.coinbase()
        self.assertResponseSuccess()
