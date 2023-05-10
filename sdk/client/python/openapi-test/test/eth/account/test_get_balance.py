from base.testing import KlaytnBaseTesting


class TestGetBalance(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec"
        self.blockNumberOrHash = "latest"

    def test_post(self):
        self.response = self.sdk.eth.get_balance(
            self.address, self.blockNumberOrHash
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_balance(self.address)
        self.assertErrorCodeMissingRequiredArgument()
