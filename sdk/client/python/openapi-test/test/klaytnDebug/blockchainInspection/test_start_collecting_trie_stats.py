from base.testing import KlaytnBaseTesting


class TestStartCollectingTrieStats(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0x0000000000000000000000000000000000000000"

    def test_post(self):
        self.response = self.sdk.debug.start_collecting_trie_stats(
            self.address
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.start_collecting_trie_stats()
        self.assertErrorCodeMissingRequiredArgument()
