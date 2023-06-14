from base.testing import KlaytnBaseTesting


class TestAdminImportChain(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.fileName = "/tmp/chain.txt"

    def test_post(self):
        self.response = self.w3.geth.admin.import_chain(
            self.fileName
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.geth.admin.import_chain()

