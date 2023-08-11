from base.testing import KlaytnBaseTesting


class TestChainConfig(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()

    # def test_post(self):
    #     self.response = self.w3.governance.chain_config()
    #     self.assertIsInstance(self.response["chainId"], int)
