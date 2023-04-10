from base.testing import KlaytnBaseTesting


class TestEthSubmitHashrate(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.hashrate = "0x5"
        self.hashrateId = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

    def test_post(self):
        eth_response = self.sdk.eth.submit_hashrate(
            self.hashrate, self.hashrateId
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.submit_hashrate(self.hashrate)

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
