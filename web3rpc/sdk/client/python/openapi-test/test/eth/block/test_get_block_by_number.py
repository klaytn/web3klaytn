from base.testing import KlaytnBaseTesting


class TestEthGetBlockByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0xd0054e"
        self.transactionObject = False

    def test_post(self):
        self.response = self.sdk.eth.get_block_by_number(
            self.blockTag, self.transactionObject
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_block_by_number(self.blockTag)
        self.assertErrorCodeMissingRequiredArgument()
