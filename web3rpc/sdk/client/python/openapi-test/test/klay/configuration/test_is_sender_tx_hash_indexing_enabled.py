from base.testing import KlaytnBaseTesting


class TestIsSenderTxHashIndexingEnabled(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.is_sender_tx_hash_indexing_enabled()
        self.assertIsInstance(self.response, bool)
