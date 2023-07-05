from base.testing import KlaytnBaseTesting


class TestAdminDatadir(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.datadir()
        self.assertResponseSuccess()
