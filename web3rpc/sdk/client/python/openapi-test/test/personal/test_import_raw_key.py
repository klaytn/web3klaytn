from base.testing import KlaytnBaseTesting
from base.eth import gen_hex_string


class TestImportRawKey(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.privateKey = gen_hex_string()
        self.passphrase = "gr8=B!0@uc$b"

    def test_post(self):
        self.response = self.w3.geth.personal.import_raw_key(
            self.privateKey, self.passphrase
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.geth.personal.import_raw_key(self.privateKey)

