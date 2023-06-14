from base.testing import KlaytnBaseTesting


class TestEthGetUncleByBlockNumberAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0xe8"
        self.uncleIndex = 1

    def test_post(self):
        self.response = self.w3.eth.get_uncle_by_block(
            self.blockTag, self.uncleIndex
        )
        self.assertEqual(self.response, None)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_uncle_by_block_number_and_index(self.blockTag)

