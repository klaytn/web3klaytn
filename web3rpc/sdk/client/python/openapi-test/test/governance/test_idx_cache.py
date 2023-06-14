from base.testing import KlaytnBaseTesting


class TestIdxCache(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.governance.idx_cache()
        self.assertResponseSuccess()
