from base.testing import KlaytnBaseTesting


class TestSendRawTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.signedTransactionData = "0xf86d0a850ba43b7400829999948c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee87038d7ea4c68000808207f5a087bb6495b03eb36ccda31b33a347dc36954ef693fddeddd89c8b4e99611f4ef5a065241c39c1f525609fc50f911adf2b49af5a96d891168a136e2f2e91445384d0"

    def test_post(self):
        eth_response = self.sdk.eth.send_raw_transaction(
            self.signedTransactionData
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.send_raw_transaction()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
