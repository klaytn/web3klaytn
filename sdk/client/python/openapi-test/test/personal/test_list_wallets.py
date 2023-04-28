from base.testing import KlaytnBaseTesting


class TestListWallets(KlaytnBaseTesting):

    def test_post(self):
        personal_response = self.sdk.personal.list_wallets()

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
