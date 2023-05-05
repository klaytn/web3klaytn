from base.testing import KlaytnBaseTesting


class TestGetStakingInfo(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockNumber = "latest"

    def test_post(self):
        governance_response = self.sdk.governance.get_staking_info(
            self.blockNumber
        )

        self.covert_response(governance_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
