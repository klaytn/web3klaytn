from base.testing import KlaytnBaseTesting


class TestGetChainConfig(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = 100

    def test_post(self):
        self.response = self.w3.klay.get_chain_config(
            self.blockTag
        )
        self.assertIsInstance(self.response["chainId"], int)
