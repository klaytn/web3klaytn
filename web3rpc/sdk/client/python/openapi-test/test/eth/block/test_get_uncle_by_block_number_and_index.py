from base.testing import KlaytnBaseTesting


class TestEthGetUncleByBlockNumberAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0xe8"
        self.uncleIndex = "0x1"

    def test_post(self):
        self.response = self.sdk.eth.get_uncle_by_block_number_and_index(
            self.blockTag, self.uncleIndex
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_uncle_by_block_number_and_index(self.blockTag)
        self.assertErrorCodeMissingRequiredArgument()
