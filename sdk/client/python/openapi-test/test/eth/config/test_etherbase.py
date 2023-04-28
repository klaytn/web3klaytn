from base.testing import KlaytnBaseTesting


class TestEtherbase(KlaytnBaseTesting):

    def test_post(self):
        eth_response = self.sdk.eth.etherbase()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
