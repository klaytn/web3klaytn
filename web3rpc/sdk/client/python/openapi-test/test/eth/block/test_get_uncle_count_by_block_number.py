from base.testing import KlaytnBaseTesting


class TestEthGetUncleCountByBlockNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0xe8"

    def test_post(self):
        self.response = self.w3.eth.get_uncle_count(
            self.blockTag
        )
        if self.response != None:
            self.assertIsInstance(self.response, int)
        else:
            self.assertIsNone(self.response)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_uncle_count_by_block_number()

