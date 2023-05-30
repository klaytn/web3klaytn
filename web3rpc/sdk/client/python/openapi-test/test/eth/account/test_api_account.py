from base.testing import KlaytnBaseTesting


class TestEthAccounts(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.accounts()
        self.assertResponseSuccess()
