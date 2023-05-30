from base.testing import KlaytnBaseTesting


class TestTraceBadBlock(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6"

    def test_post(self):
        self.response = self.sdk.debug.trace_bad_block(
            self.blockHash
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.trace_bad_block()
        self.assertErrorCodeMissingRequiredArgument()