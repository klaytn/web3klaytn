from base.testing import KlaytnBaseTesting


class TestUninstallFilter(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.quantity = "0xd32fd16b6906e67f6e2b65dcf48fc272"

    def test_post(self):
        klay_response = self.sdk.klay.uninstall_filter(
            self.quantity,
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.uninstall_filter()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
