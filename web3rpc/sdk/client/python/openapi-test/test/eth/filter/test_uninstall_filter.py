from base.testing import KlaytnBaseTesting


class TestEthUninstallFilter(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.filterId = "0xb"

    def test_post(self):
        self.response = self.w3.eth.uninstall_filter(
            self.filterId
        )
        self.assertIsInstance(self.response, bool)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.uninstall_filter()

