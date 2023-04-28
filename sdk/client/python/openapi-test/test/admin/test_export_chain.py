from base.testing import KlaytnBaseTesting


class TestAdminExportChain(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.fileName = "/tmp/chain311131.txt"

    def test_post(self):
        admin_response = self.sdk.admin.export_chain(
            self.fileName
        )

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        admin_response = self.sdk.admin.export_chain()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
