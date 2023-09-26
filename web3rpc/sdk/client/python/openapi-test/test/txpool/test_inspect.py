from base.testing import KlaytnBaseTesting


class TestInspect(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.txpool.inspect()
        self.assertIn("pending", self.response) or self.assertIn("queued", self.response)
