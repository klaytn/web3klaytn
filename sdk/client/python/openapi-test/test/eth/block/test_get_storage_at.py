from base.testing import KlaytnBaseTesting


class TestEthGetStorageAt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0x295a70b2de5e3953354a6a8344e616ed314d7251"
        self.quantity = "0x0"
        self.blockTag = "latest"

    def test_post(self):
        eth_response = self.sdk.eth.get_storage_at(
            self.address, self.quantity, self.blockTag
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.get_storage_at(self.blockTag)
        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
