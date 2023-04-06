from base.testing import KlaytnBaseTesting


class TestEthGetBlockTransactionCountByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blochHash = "0x0c11803ab36110db993e7520908b9ba9336cca2f2dcc9b6130c481a3ccdc2621"

    def test_post(self):
        klay_response = self.sdk.eth.get_block_transaction_count_by_hash(
            self.blochHash
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.eth.get_block_transaction_count_by_hash()
        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
