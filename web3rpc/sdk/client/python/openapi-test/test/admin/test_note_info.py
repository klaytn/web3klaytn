from base.testing import KlaytnBaseTesting


class TestAdminNodeInfo(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.node_info()
        self.assertIsInstance(self.response["name"], str)
