from base.testing import KlaytnBaseTesting


class TestGetDecodedAnchoringTransactionByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.hashOfTransaction = "0x72cde80650c7c6745e4cf4c162e9ce1e5542f4d86112925faa6aa75f6a6142ec"

    def test_post(self):
        self.response = self.w3.klay.get_decoded_anchoring_transaction_by_hash(
            self.hashOfTransaction
        )
        self.assertRegex(self.response["blockHash"], r'^0x.*$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_decoded_anchoring_transaction_by_hash()
