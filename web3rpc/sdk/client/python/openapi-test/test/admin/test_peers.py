from base.testing import KlaytnBaseTesting


class TestAdminPeers(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.peers()
        self.assertResponseSuccess()
