from base.testing import KlaytnBaseTesting


class TestAdminSaveTrieNodeCacheToDisk(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.save_trie_node_cache_to_disk()
        self.assertResponseSuccess()
