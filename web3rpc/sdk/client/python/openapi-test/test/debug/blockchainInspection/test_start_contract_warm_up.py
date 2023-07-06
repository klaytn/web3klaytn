from base.testing import KlaytnBaseTesting


class TestStartContractWarmUp(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xfD1d63a152f7A7Ef14bd157C1c73c5bC3239EA5D"

    def test_post(self):
        self.response = self.w3.debug.start_contract_warm_up(
            self.address
        )
        self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.start_contract_warm_up()

