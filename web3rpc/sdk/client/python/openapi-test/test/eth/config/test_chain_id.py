from base.testing import KlaytnBaseTesting


class TestChainId(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.chain_id()
        self.assertResponseSuccess()
