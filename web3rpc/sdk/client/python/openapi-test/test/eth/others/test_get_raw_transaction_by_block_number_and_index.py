from base.testing import KlaytnBaseTesting


class TestGetRawTransactionByBlockNumberAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockNumber = 118593751
        self.index = "0x0"

    def test_post(self):
        self.response = self.sdk.eth.get_raw_transaction_by_block_number_and_index(
            self.blockNumber, self.index
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_raw_transaction_by_block_number_and_index()
        self.assertErrorCodeMissingRequiredArgument()
