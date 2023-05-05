from base.testing import KlaytnBaseTesting


class TestGetChainConfig(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = 100

    def test_post(self):
        klay_response = self.sdk.klay.get_chain_config(
            self.blockTag
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

