from base.testing import KlaytnBaseTesting


class TestGetTransactionByBlocNumberAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x27"
        self.transactionIndex = "0x0"

    def test_post(self):
        self.response = self.sdk.klay.get_transaction_by_block_number_and_index(
            self.blockTag, self.transactionIndex
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.get_transaction_by_block_number_and_index()
        self.assertErrorCodeMissingRequiredArgument()
