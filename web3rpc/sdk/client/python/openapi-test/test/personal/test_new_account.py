from base.testing import KlaytnBaseTesting


class TestNewAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.passphrase = "helloWorld"

    def test_post(self):
        self.response = self.sdk.personal.new_account(
            self.passphrase
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.personal.new_account()
        self.assertErrorCodeMissingRequiredArgument()
