from base.testing import KlaytnBaseTesting


class TestListAccount(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.personal.list_accounts()
        self.assertResponseSuccess()
