from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from opensdk.sdk import OpenSDK


class TestTransactionByHash(KlaytnBaseTesting):
    sdk = OpenSDK(KLAYTN_URL)

    def setUp(self) -> None:
        super().setUp()
        self.transactionHash = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"

    def test_post(self):
        klay_response = self.sdk.klay.get_transaction_receipt(self.transactionHash)

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.get_transaction_receipt()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
