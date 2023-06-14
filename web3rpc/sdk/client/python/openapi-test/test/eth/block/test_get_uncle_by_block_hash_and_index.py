from base.testing import KlaytnBaseTesting


class TestEthGetUncleByBlockHashAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c"
        self.uncleIndex = 1

    def test_post(self):
        self.response = self.w3.eth.get_uncle_by_block(
            self.blockHash, self.uncleIndex
        )
        self.assertEqual(self.response, None)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_uncle_by_block_hash_and_index(self.blockHash)

