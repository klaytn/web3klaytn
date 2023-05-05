from base.testing import KlaytnBaseTesting


class TestKlayFeeHistory(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockCount = "0x10"
        self.lastBlock = "latest"
        self.rewardPercentiles = [0.1, 0.2, 0.3]

    def test_post(self):
        klay_response = self.sdk.klay.fee_history(
            self.blockCount, self.lastBlock, self.rewardPercentiles
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.fee_history(self.lastBlock)

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
