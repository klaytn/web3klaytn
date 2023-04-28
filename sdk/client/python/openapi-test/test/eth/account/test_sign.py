from base.testing import KlaytnBaseTesting
from base.eth import unlock_account

class TestSign(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = unlock_account()
        self.message = "0xdeadbeaf"

    def test_post(self):
        eth_response = self.sdk.eth.sign(
            self.address, self.message
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.sign(self.address)

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
