from base.testing import KlaytnBaseTesting


class TestKlayGetCouncil(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x1b4"

    def test_post(self):
        self.response = self.w3.klay.get_council(
            self.blockTag
        )

        self.assertResponseSuccess()
