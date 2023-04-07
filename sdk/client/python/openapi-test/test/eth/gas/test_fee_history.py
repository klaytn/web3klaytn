from base.testing import KlaytnBaseTesting


class TestFeeHistory(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockCount = "0x10"
        self.lastBlock = "latest"
        self.rewardPercentiles = [0.1, 0.2, 0.3]

    def test_post(self):
        eth_response = self.sdk.eth.fee_history(
            self.blockCount, self.lastBlock, self.rewardPercentiles
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.fee_history(self.blockCount)

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
