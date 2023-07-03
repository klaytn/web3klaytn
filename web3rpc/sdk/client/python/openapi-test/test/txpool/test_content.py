from base.testing import KlaytnBaseTesting


class TestContent(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.txpool.content()
        self.assertIn("pending", self.response) or self.assertIn("queued", self.response)

