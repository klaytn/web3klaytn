from base.testing import KlaytnBaseTesting


class TestUnlockAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xd9ab651b40dda2ee84fa087828d8a20dec5d3d97"
        self.passphrase = "helloWorld"
        self.duration = 30

    def test_post(self):
        personal_response = self.sdk.personal.unlock_account(
            self.address, self.passphrase, self.duration
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.unlock_account()

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
