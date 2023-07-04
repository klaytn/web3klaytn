from base.testing import KlaytnBaseTesting


class TestItemsAt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = 0

    def test_post(self):
        self.response = self.w3.governance.items_at(
            self.blockTag
        )
        self.assertRegex(self.response["governance.governingnode"], r'^0x.*$')
