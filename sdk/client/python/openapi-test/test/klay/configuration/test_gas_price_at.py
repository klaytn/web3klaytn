from base.testing import KlaytnBaseTesting


class TestKlayGasPriceAt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.baseFee = "0x64"

    def test_post(self):
        klay_response = self.sdk.klay.gas_price_at(
            self.baseFee,
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
