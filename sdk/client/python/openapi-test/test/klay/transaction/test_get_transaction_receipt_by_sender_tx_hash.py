from base.testing import KlaytnBaseTesting


class TestGetTransactionReceiptBySenderTxHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionHash = "0x18fe9e1007da7d20aad77778557fb8acc58c80054daba65124c8c843aadd3478"
        
    def test_post(self):
        klay_response = self.sdk.klay.get_transaction_receipt_by_sender_tx_hash(
            self.transactionHash
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.get_transaction_receipt_by_sender_tx_hash()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
