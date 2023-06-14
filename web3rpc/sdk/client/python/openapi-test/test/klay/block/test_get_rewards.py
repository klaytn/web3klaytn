from base.testing import KlaytnBaseTesting


class TestKlayGetRewards(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "latest"

    def test_post(self):
        self.response = self.w3.klay.get_rewards(
            self.blockTag
        )
        self.assertResponseSuccess()
