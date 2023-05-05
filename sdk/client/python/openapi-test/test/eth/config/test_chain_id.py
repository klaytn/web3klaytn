from base.testing import KlaytnBaseTesting


class TestChainId(KlaytnBaseTesting):

    def test_post(self):
        eth_response = self.sdk.eth.chain_id()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
