from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from opensdk.sdk import OpenSDK


class TestGetAccount(KlaytnBaseTesting):
    sdk = OpenSDK(KLAYTN_URL)

    def setUp(self) -> None:
        super().setUp()
        self.address = "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722"
        self.blockNumberOrHash = "latest"

    def test_post(self):
        klay_response = self.sdk.klay.get_account(
            self.address, self.blockNumberOrHash
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.get_account(self.blockNumberOrHash)
        
        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
