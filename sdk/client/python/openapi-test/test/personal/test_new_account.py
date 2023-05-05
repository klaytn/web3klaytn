from base.testing import KlaytnBaseTesting


class TestNewAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.passphrase = "helloWorld"

    def test_post(self):
        personal_response = self.sdk.personal.new_account(
            self.passphrase
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.new_account()

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
