from base.testing import KlaytnBaseTesting


class TestIdxCache(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.governance.idx_cache()
        self.assertResponseSuccess()
