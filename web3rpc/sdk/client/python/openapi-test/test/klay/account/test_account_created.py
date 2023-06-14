from base.testing import KlaytnBaseTesting


class TestAccountCreated(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "latest"
        self.address = "0xa4f42d4d2a3a13874406435500950c9bf2d783db"

    def test_post(self):
        self.response = self.w3.klay.account_created(
            self.address, self.blockTag
        )
        self.assertIsInstance(self.response, bool)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.account_created(self.blockTag)
