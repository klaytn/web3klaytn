from base.testing import KlaytnBaseTesting


class TestStartContractWarmUp(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"

    def test_post(self):
        self.response = self.sdk.debug.start_contract_warm_up(
            self.address
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.start_contract_warm_up()
        self.assertErrorCodeMissingRequiredArgument()
