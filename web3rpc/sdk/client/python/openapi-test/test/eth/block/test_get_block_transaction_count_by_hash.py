from base.testing import KlaytnBaseTesting


class TestEthGetBlockTransactionCountByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x0c11803ab36110db993e7520908b9ba9336cca2f2dcc9b6130c481a3ccdc2621"

    def test_post(self):
        self.response = self.sdk.eth.get_block_transaction_count_by_hash(
            self.blockHash
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_block_transaction_count_by_hash()
        self.assertErrorCodeMissingRequiredArgument()
