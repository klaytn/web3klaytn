from base.testing import KlaytnBaseTesting


class TestAdminStopWS(KlaytnBaseTesting):

    def test_post(self):
        admin_response = self.sdk.admin.stop_ws()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
