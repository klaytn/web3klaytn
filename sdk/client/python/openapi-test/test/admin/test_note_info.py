from base.testing import KlaytnBaseTesting


class TestAdminNodeInfo(KlaytnBaseTesting):

    def test_post(self):
        admin_response = self.sdk.admin.node_info()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
