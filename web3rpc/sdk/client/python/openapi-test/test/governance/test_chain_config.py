from base.testing import KlaytnBaseTesting


class TestChainConfig(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.governance.chain_config()
        self.assertIsInstance(self.response["chainId"], int)
