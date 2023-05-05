from base.testing import KlaytnBaseTesting


class TestStartCollectingTrieStats(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0x0000000000000000000000000000000000000000"

    def test_post(self):
        debug_response = self.sdk.debug.start_collecting_trie_stats(
            self.address
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.start_collecting_trie_stats()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
