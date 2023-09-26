from base.testing import KlaytnBaseTesting


class TestEthAccounts(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.eth.accounts
        self.assertTrue(len(self.response) >= 0)
