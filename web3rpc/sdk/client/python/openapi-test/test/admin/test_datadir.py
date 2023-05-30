from base.testing import KlaytnBaseTesting


class TestAdminDatadir(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.datadir()
        self.assertResponseSuccess()
