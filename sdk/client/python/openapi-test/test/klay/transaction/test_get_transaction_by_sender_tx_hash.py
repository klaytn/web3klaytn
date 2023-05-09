from base.testing import KlaytnBaseTesting


class TestGetTransactionBySenderTxHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionHash = "0x18fe9e1007da7d20aad77778557fb8acc58c80054daba65124c8c843aadd3478"
    
    def test_post(self):
        self.response = self.sdk.klay.get_transaction_by_sender_tx_hash(
            self.transactionHash
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.get_transaction_by_sender_tx_hash()
        self.assertErrorCodeMissingRequiredArgument()
