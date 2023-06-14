from base.testing import KlaytnBaseTesting


class TestKlayGetCode(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"
        self.blockTag = "0x2"

    def test_post(self):
        self.response = self.w3.klay.get_code(
            self.address, self.blockTag
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_code(self.blockTag)

