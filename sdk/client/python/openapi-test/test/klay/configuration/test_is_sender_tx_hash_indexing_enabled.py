from base.testing import KlaytnBaseTesting


class TestIsSenderTxHashIndexingEnabled(KlaytnBaseTesting):

    def test_post(self):
        klay_response = self.sdk.klay.is_sender_tx_hash_indexing_enabled()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)