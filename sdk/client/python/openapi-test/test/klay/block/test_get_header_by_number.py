from base.testing import KlaytnBaseTesting


class TestKlayGetHeaderByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x1b4"

    def test_post(self):
        self.response = self.sdk.klay.get_header_by_number(
            self.blockTag
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.get_header_by_number()
        self.assertErrorCodeMissingRequiredArgument()
