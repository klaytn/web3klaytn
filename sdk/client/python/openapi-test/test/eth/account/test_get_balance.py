from base.testing import KlaytnBaseTesting


class TestGetBalance(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec"
        self.blockNumberOrHash = "latest"

    def test_post(self):
        eth_response = self.sdk.eth.get_balance(
            self.address, self.blockNumberOrHash
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.get_balance(self.address)

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
