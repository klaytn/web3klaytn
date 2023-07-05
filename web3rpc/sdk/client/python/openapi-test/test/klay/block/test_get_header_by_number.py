from base.testing import KlaytnBaseTesting
import re


class TestKlayGetHeaderByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x1b4"

    def test_post(self):
        self.response = self.w3.klay.get_header_by_number(
            self.blockTag
        )
        self.assertResponseSuccess()
        self.assertTrue(re.match(r"^0x?", self.response["hash"]))

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_header_by_number()

