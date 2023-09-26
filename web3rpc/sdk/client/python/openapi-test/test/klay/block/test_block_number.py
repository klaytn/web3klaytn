from base.testing import KlaytnBaseTesting


class TestKlayBlockNumber(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.block_number()
        self.assertIsInstance(self.response, str)
