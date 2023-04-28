from base.testing import KlaytnBaseTesting


class TestAdminStopHTTP(KlaytnBaseTesting):

    def test_post(self):
        admin_response = self.sdk.admin.stop_http()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
