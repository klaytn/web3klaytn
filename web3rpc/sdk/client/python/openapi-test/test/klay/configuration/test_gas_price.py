from base.testing import KlaytnBaseTesting


class TestGasPrice(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.gas_price()
        self.assertResponseSuccess()
