from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from opensdk.sdk import OpenSDK


class TestAccountCreated(KlaytnBaseTesting):
    sdk = OpenSDK(KLAYTN_URL)

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "latest"
        self.address = "0xa4f42d4d2a3a13874406435500950c9bf2d783db"

    def test_post(self):
        klay_response = self.sdk.klay.account_created(
            self.address, self.blockTag
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.account_created(self.blockTag)
        
        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
