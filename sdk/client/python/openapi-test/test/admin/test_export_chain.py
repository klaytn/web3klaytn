from base.testing import KlaytnBaseTesting


class TestAdminExportChain(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.fileName = "/tmp/chain311131.txt"

    def test_post(self):
        self.response = self.sdk.admin.export_chain(
            self.fileName
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.admin.export_chain()
        self.assertErrorCodeMissingRequiredArgument()
