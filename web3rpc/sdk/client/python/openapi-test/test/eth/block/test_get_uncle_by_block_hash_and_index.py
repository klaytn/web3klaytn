from base.testing import KlaytnBaseTesting


class TestEthGetUncleByBlockHashAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c"
        self.uncleIndex = "0x1"

    def test_post(self):
        self.response = self.sdk.eth.get_uncle_by_block_hash_and_index(
            self.blockHash, self.uncleIndex
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_uncle_by_block_hash_and_index(self.blockHash)
        self.assertErrorCodeMissingRequiredArgument()
