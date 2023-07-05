from base.testing import KlaytnBaseTesting


class TestSetHead(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.number = "0x100"

    def test_post(self):
        self.response = self.w3.debug.set_head(
            self.number
        )
        self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.set_head()

