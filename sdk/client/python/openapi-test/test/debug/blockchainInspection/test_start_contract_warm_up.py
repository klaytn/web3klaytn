from base.testing import KlaytnBaseTesting


class TestStartContractWarmUp(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xfD1d63a152f7A7Ef14bd157C1c73c5bC3239EA5D"

    def test_post(self):
        self.response = self.sdk.debug.start_contract_warm_up(
            self.address
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.start_contract_warm_up()
        self.assertErrorCodeMissingRequiredArgument()
