from base.testing import KlaytnBaseTesting


class TestKlaySha3(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.hashData = "0x11223344"

    def test_post(self):
        klay_response = self.sdk.klay.sha3(
            self.hashData,
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.sha3()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
