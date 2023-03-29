from base.testing import KlaytnBaseTesting


class TestKlayChainId(KlaytnBaseTesting):

    def test_post(self):
        klay_response = self.sdk.klay.chain_id()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
