from base.testing import KlaytnBaseTesting


class TestImportRawKey(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.privateKey = "cd87934ee007b7a458fa00dc0314fff8b2bd43b3079f46c820c379e483b4fd8e"
        self.passphrase = "gr8=B!0@uc$b"

    def test_post(self):
        personal_response = self.sdk.personal.import_raw_key(
            self.privateKey, self.passphrase
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.import_raw_key(self.privateKey)

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
