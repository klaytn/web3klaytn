from base.testing import KlaytnBaseTesting


class TestEthAccounts(KlaytnBaseTesting):

    def test_post(self):
        eth_response = self.sdk.eth.accounts()
        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
