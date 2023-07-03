from base.testing import KlaytnBaseTesting


class TestGetStakingInfo(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "latest"

    def test_post(self):
        self.response = self.w3.klay.get_staking_info(
            self.blockTag
        )
        if self.response is not None:
            self.assertIsInstance(self.response, list)
        else:
            self.assertIsNone(self.response)
