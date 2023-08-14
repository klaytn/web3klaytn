from base.testing import KlaytnBaseTesting


class TestGetRewardsAccumulated(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.firstBlock = 123400489
        self.lastBlock = 123416489

    def test_post(self):
        self.response = self.w3.governance.governance_get_rewards_accumulated(
            self.firstBlock, self.lastBlock
        )
        self.assertIsInstance(self.response['totalMinted'], int)
