from base.testing import KlaytnBaseTesting


class TestOpenWallet(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.url = "keystore:///home/sotatek/klay-node/kcn-v1.10.2-0-linux-amd64/kcn-linux-amd64/data/keystore/UTC--2023-04-13T03-23-36.992476555Z--8cd4b6b24f2cd0b83d49876f932254823e875547"
        self.passphrase = "passphrase"

    def test_post(self):
        personal_response = self.sdk.personal.open_wallet(
            self.url, self.passphrase
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.open_wallet()

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
