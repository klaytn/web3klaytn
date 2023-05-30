from base.testing import KlaytnBaseTesting


class TestEthUninstallFilter(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.filterId = "0xb"

    def test_post(self):
        self.response = self.sdk.eth.uninstall_filter(
            self.filterId
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.uninstall_filter()
        self.assertErrorCodeMissingRequiredArgument()
