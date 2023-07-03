from base.testing import KlaytnBaseTesting


class TestKlayFeeHistory(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockCount = "0x10"
        self.lastBlock = "latest"
        self.rewardPercentiles = [0.1, 0.2, 0.3]

    def test_post(self):
        self.response = self.w3.klay.fee_history(
            self.blockCount, self.lastBlock, self.rewardPercentiles
        )
        self.assertRegex(self.response["oldestBlock"], r'^0x.*$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.fee_history(self.lastBlock)
