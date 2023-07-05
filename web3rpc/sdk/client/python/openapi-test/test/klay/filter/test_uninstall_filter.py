from base.testing import KlaytnBaseTesting


class TestUninstallFilter(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.quantity = "0xd32fd16b6906e67f6e2b65dcf48fc272"

    def test_post(self):
        self.response = self.w3.klay.uninstall_filter(
            self.quantity,
        )
        self.assertIsInstance(self.response, bool)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.uninstall_filter()

