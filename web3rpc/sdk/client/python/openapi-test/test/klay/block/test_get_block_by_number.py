from base.testing import KlaytnBaseTesting
import re


class TestKlayGetBlockByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x64"
        self.boolean = True

    def test_post(self):
        self.response = self.w3.klay.get_block_by_number(
            self.blockTag, self.boolean
        )
        self.assertResponseSuccess()
        self.assertRegex(self.response["hash"], r'^0x?')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_block_by_number(self.blockTag)

