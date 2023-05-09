from base.testing import KlaytnBaseTesting


class TestPersonalDeriveAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.url = "url"
        self.path = "path"
        self.pin = True

    def test_post(self):
        self.response = self.sdk.personal.derive_account(
            self.url, self.path, self.pin
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.personal.derive_account(self.url)
        self.assertErrorCodeMissingRequiredArgument()
