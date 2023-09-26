from base.testing import KlaytnBaseTesting


class TestEthGetHeaderByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x1b4"

    def test_post(self):
        self.response = self.w3.eth_other.get_header_by_number(
            self.blockTag
        )
        if self.response is not None:
            self.assertRegex(self.response["hash"], r'^0x.*$')
        else:
            self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.eth_other.get_header_by_number()

