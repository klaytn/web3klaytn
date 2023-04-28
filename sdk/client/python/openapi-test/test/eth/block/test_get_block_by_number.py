from base.testing import KlaytnBaseTesting


class TestEthGetBlockByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0xd0054e"
        self.transactionObject = False

    def test_post(self):
        eth_response = self.sdk.eth.get_block_by_number(
            self.blockTag, self.transactionObject
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.get_block_by_number(self.blockTag)

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
