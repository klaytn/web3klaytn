from base.testing import KlaytnBaseTesting


class TestEthSubmitWork(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.nonce = "0x0000000000000001"
        self.powHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
        self.mixDigest = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

    def test_post(self):
        eth_response = self.sdk.eth.submit_work(
            self.nonce, self.powHash, self.mixDigest
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.submit_work(self.powHash)

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
