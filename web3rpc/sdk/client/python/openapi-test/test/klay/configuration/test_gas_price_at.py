from base.testing import KlaytnBaseTesting


class TestKlayGasPriceAt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.baseFee = "0x64"

    def test_post(self):
        self.response = self.w3.klay.gas_price_at(
            self.baseFee,
        )
        self.assertIsInstance(self.response, str)
