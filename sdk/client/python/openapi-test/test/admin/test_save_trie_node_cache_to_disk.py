from base.testing import KlaytnBaseTesting


class TestAdminSaveTrieNodeCacheToDisk(KlaytnBaseTesting):

    def test_post(self):
        admin_response = self.sdk.admin.save_trie_node_cache_to_disk()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
