from base.testing import KlaytnBaseTesting


class TestReplaceRawKey(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.keyData = "24c34f686a5848edb19180fb723b5db21c626f253e8b63bf8a0054ea67852c0a"
        self.passphrase = "gr8=B!0@uc$b"
        self.newPassphrase = "gr8=B!0@uc$b"
        
    def test_post(self):
        personal_response = self.sdk.personal.replace_raw_key(
            self.keyData, self.passphrase, self.newPassphrase
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.replace_raw_key()

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
