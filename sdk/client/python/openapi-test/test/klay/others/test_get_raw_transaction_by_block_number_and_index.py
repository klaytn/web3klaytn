from base.testing import KlaytnBaseTesting


class TestGetRawTransactionByBlockNumberAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x27"
        self.transactionIndex = "0x0"

    def test_post(self):
        klay_response = self.sdk.klay.get_raw_transaction_by_block_number_and_index(
            self.blockTag, self.transactionIndex
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.get_raw_transaction_by_block_number_and_index(self.blockTag)

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
