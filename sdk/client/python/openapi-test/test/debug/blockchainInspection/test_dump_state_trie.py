from base.testing import KlaytnBaseTesting


class TestDebugDumpStateTrie(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockNumber = "0x80"

    def test_post(self):
        self.response = self.sdk.debug.dump_state_trie(
            self.blockNumber
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.dump_state_trie()
        self.assertErrorCodeMissingRequiredArgument()
