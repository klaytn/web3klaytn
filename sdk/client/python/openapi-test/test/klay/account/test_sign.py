from base.testing import KlaytnBaseTesting
from base.eth import unlock_account


class TestKlaySign(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = unlock_account()
        self.message = "0xdeadbeaf"

    def test_post(self):
        klay_response = self.sdk.klay.sign(
            self.address, self.message
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.sign(self.address)

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
