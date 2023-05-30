from base.testing import KlaytnBaseTesting


class TestEthGetBlockByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c"
        self.transactionObject = True

    def test_post(self):
        self.response = self.sdk.eth.get_block_by_hash(
            self.blockHash, self.transactionObject
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_block_by_hash(self.blockHash)
        self.assertErrorCodeMissingRequiredArgument()
