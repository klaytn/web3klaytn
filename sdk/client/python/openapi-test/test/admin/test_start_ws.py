from base.testing import KlaytnBaseTesting


class TestAdminStartWS(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.adminHost = "127.0.0.1"
        self.port = 8552
        self.cors = ""
        self.apis = "klay"

    def test_post(self):
        admin_response = self.sdk.admin.start_ws(
            self.adminHost, self.port, self.cors, self.apis
        )

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
