from base.testing import KlaytnBaseTesting


class TestKlayChainId(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.chain_id()
        self.assertRegex(self.response, r'^0x.*$')
