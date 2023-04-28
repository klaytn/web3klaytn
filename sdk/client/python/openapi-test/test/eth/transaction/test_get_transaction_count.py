from base.testing import KlaytnBaseTesting


class TestGetTransactionCount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xc94770007dda54cF92009BFF0dE90c06F603a09f"
        self.blockTag = "latest"

    def test_post(self):
        eth_response = self.sdk.eth.get_transaction_count(
            self.address, self.blockTag
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.get_transaction_count(self.address)

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
