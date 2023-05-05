from base.testing import KlaytnBaseTesting


class TestPendingTransactions(KlaytnBaseTesting):

    def test_post(self):
        eth_response = self.sdk.eth.pending_transactions()
        
        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
