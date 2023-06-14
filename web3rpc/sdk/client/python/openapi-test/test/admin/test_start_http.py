from base.testing import KlaytnBaseTesting


class TestAdminStartHTTP(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.adminHost = "127.0.0.1"
        self.port = 8551
        self.cors = ""
        self.apis = "klay"

    def test_post(self):
        self.response = self.w3.geth.admin.start_http(
            self.adminHost, self.port, self.cors, self.apis
        )
        self.assertResponseSuccess()
