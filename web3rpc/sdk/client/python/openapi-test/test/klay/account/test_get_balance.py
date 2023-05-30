from base.testing import KlaytnBaseTesting


class TestKlayGetBalance(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722"
        self.blockTag = "latest"

    def test_post(self):
        self.response = self.sdk.klay.get_balance(
            self.address, self.blockTag
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.get_balance(self.blockTag)
        self.assertErrorCodeMissingRequiredArgument()
