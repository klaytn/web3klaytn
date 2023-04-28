from base.testing import KlaytnBaseTesting


class TestSendAccountUpdate(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.tx = {
            "from": "0x1d4e05bb72677cb8fa576149c945b57d13f855e4",
            "key": "0x02a102dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8"
        }
        self.passphrase = "gr8=B!0@uc$b"

    def test_post(self):
        personal_response = self.sdk.personal.send_account_update(
            self.tx, self.passphrase
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.send_account_update()

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
