from base.testing import KlaytnBaseTesting


class TestSendRawTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.singedTransactionData = "0xf86d0b850ba43b7400829999948c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee87038d7ea4c68000808207f6a0f3a94b34217db4847eecd43c9aa33c8be9f755483ec075557b7ece4ef5d7ddb6a014e2069456e501fa9546134f0f2164cbb61e55e006736b6b7f55f04c90e1f164"

    def test_post(self):
        klay_response = self.sdk.klay.send_raw_transaction(
            self.singedTransactionData
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.send_raw_transaction()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
