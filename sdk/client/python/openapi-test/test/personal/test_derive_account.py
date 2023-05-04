from base.testing import KlaytnBaseTesting


class TestPersonalDeriveAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.url = "url"
        self.path = "path"
        self.pin = True

    def test_post(self):
        personal_response = self.sdk.personal.derive_account(
            self.url, self.path, self.pin
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.derive_account(self.url)

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
