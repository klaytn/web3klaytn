from base.testing import KlaytnBaseTesting


class TestInspect(KlaytnBaseTesting):

    def test_post(self):
        txpool_response = self.sdk.txpool.inspect()

        self.covert_response(txpool_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
