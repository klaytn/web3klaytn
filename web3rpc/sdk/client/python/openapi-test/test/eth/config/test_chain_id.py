from base.testing import KlaytnBaseTesting


class TestChainId(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.chain_id
        self.assertIsInstance(self.response, int)
