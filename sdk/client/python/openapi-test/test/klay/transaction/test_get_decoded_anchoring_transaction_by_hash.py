from base.testing import KlaytnBaseTesting


class TestGetDecodedAnchoringTransactionByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.hashOfTransaction = "0x72cde80650c7c6745e4cf4c162e9ce1e5542f4d86112925faa6aa75f6a6142ec"

    def test_post(self):
        klay_response = self.sdk.klay.get_decoded_anchoring_transaction_by_hash(
            self.hashOfTransaction
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.get_decoded_anchoring_transaction_by_hash()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
