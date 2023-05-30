from base.testing import KlaytnBaseTesting


class TestAdminNodeInfo(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.node_info()
        self.assertResponseSuccess()
