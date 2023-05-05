from base.testing import KlaytnBaseTesting


class TestKlayAccounts(KlaytnBaseTesting):

    def test_post(self):
        klay_response = self.sdk.klay.accounts()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
