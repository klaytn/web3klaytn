from base.testing import KlaytnBaseTesting


class TestAccountCreated(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "latest"
        self.address = "0xa4f42d4d2a3a13874406435500950c9bf2d783db"

    def test_post(self):
        self.response = self.sdk.klay.account_created(
            self.address, self.blockTag
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.account_created(self.blockTag)
        self.assertErrorCodeMissingRequiredArgument()
