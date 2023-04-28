from base.testing import KlaytnBaseTesting


class TestContent(KlaytnBaseTesting):

    def test_post(self):
        txpool_response = self.sdk.txpool.content()

        self.covert_response(txpool_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
