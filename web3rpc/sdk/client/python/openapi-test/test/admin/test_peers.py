from base.testing import KlaytnBaseTesting


class TestAdminPeers(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.peers()
        self.assertResponseSuccess()
