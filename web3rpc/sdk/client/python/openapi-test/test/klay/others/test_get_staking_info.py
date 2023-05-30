from base.testing import KlaytnBaseTesting


class TestGetStakingInfo(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "latest"

    def test_post(self):
        self.response = self.sdk.klay.get_staking_info(self.blockTag)
        self.assertResponseSuccess()
