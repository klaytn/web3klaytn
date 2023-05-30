from base.testing import KlaytnBaseTesting


class TestKlayChainId(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.chain_id()
        self.assertResponseSuccess()
