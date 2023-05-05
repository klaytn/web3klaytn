from base.testing import KlaytnBaseTesting


class TestIdxCacheFromDb(KlaytnBaseTesting):

    def test_post(self):
        governance_response = self.sdk.governance.idx_cache_from_db()

        self.covert_response(governance_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
