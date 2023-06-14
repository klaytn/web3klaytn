from base.testing import KlaytnBaseTesting


class TestAdminSaveTrieNodeCacheToDisk(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.save_trie_node_cache_to_disk()
        self.assertResponseSuccess()
