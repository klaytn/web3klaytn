from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from opensdk.sdk import OpenSDK


class TestGetTransactionByBlocNumberAndIndex(KlaytnBaseTesting):
    sdk = OpenSDK(KLAYTN_URL)

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x27"
        self.transactionIndex = "0x0"

    def test_post(self):
        klay_response = self.sdk.klay.get_transaction_by_block_number_and_index(self.blockTag, self.transactionIndex)

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.get_transaction_by_block_number_and_index()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
