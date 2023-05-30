from base.testing import KlaytnBaseTesting


class TestKlayBlockNumber(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.block_number()
        self.assertResponseSuccess()
