from base.testing import KlaytnBaseTesting


class TestGetRawTransactionByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionHash = "0x29b6cd965c7d9a53a6f068da259dce1d3810ba79fff8eebac5d4da14754e67e6"

    def test_post(self):
        self.response = self.sdk.klay.get_raw_transaction_by_hash(self.transactionHash)
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.get_raw_transaction_by_hash()
        self.assertErrorCodeMissingRequiredArgument()
