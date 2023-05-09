from base.testing import KlaytnBaseTesting


class TestListWallets(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.personal.list_wallets()
        self.assertResponseSuccess()
