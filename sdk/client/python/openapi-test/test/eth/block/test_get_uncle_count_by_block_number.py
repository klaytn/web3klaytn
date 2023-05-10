from base.testing import KlaytnBaseTesting


class TestEthGetUncleCountByBlockNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0xe8"

    def test_post(self):
        self.response = self.sdk.eth.get_uncle_count_by_block_number(
            self.blockTag
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_uncle_count_by_block_number()
        self.assertErrorCodeMissingRequiredArgument()
