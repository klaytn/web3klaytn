from base.testing import KlaytnBaseTesting


class TestEthGetBlockTransactionCountByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockNumber = "0xe8"

    def test_post(self):
        self.response = self.sdk.eth.get_block_transaction_count_by_number(
            self.blockNumber
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_block_transaction_count_by_number()
        self.assertErrorCodeMissingRequiredArgument()
