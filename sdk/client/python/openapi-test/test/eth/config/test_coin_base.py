from base.testing import KlaytnBaseTesting


class TestCoinBase(KlaytnBaseTesting):

    def test_post(self):
        eth_response = self.sdk.eth.coinbase()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)