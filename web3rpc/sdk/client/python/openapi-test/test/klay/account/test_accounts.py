from base.testing import KlaytnBaseTesting


class TestKlayAccounts(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.accounts()
        self.assertIsInstance(self.response, list)
