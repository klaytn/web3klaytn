from base.testing import KlaytnBaseTesting


class TestEthGetUncleCountByBlockHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a"

    def test_post(self):
        self.response = self.w3.eth.get_uncle_count(
            self.blockHash
        )
        if self.response != None:
            self.assertIsInstance(self.response, int)
        else:
            self.assertIsNone(self.response)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_uncle_count_by_block_hash()

