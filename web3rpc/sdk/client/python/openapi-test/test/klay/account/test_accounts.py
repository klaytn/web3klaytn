from base.testing import KlaytnBaseTesting


class TestKlayAccounts(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.accounts()
        self.assertResponseSuccess()
