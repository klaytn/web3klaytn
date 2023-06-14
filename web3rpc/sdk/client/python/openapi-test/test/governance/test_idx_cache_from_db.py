from base.testing import KlaytnBaseTesting


class TestIdxCacheFromDb(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.governance.idx_cache_from_db()
        self.assertResponseSuccess()
