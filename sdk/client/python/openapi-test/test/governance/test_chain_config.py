from base.testing import KlaytnBaseTesting


class TestChainConfig(KlaytnBaseTesting):

    def test_post(self):
        governance_response = self.sdk.governance.chain_config()

        self.covert_response(governance_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
