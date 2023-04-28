from base.testing import KlaytnBaseTesting


class TestListAccount(KlaytnBaseTesting):

    def test_post(self):
        personal_response = self.sdk.personal.list_accounts()

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
