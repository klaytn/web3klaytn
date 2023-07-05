from base.testing import KlaytnBaseTesting


class TestGetStakingInfo(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockNumber = "latest"

    def test_post(self):
        self.response = self.w3.governance.get_staking_info(
            self.blockNumber
        )
        self.assertResponseSuccess()
