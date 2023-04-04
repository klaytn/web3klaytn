from base.testing import KlaytnBaseTesting


class TestKlayGetRewards(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "latest"

    def test_post(self):
        klay_response = self.sdk.klay.get_rewards(
            self.blockTag
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
