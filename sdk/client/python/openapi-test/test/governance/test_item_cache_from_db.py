from base.testing import KlaytnBaseTesting


class TestItemCacheFromDb(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockNumber = 0

    def test_post(self):
        governance_response = self.sdk.governance.item_cache_from_db(
            self.blockNumber
        )

        self.covert_response(governance_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
