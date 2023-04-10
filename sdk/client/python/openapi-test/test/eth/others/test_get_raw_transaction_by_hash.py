from base.testing import KlaytnBaseTesting


class TestGetRawTransactionByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionHash = '0x5bbcde52084defa9d1c7068a811363cc27a25c80d7e495180964673aa5f47687'

    def test_post(self):
        eth_response = self.sdk.eth.get_transaction_by_hash(
            self.transactionHash
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.get_transaction_by_hash()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
