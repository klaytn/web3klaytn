from base.testing import KlaytnBaseTesting


class TestAdminPeers(KlaytnBaseTesting):

    def test_post(self):
        admin_response = self.sdk.admin.peers()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
