from base.testing import KlaytnBaseTesting


class TestLockAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xfa415bb3e6231f488ff39eb2897db0ef3636dd32"

    def test_post(self):
        personal_response = self.sdk.personal.lock_account(
            self.address
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.lock_account()

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
