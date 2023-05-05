from base.testing import KlaytnBaseTesting


class TestItemsAt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = 0

    def test_post(self):
        governance_response = self.sdk.governance.items_at(
            self.blockTag
        )

        self.covert_response(governance_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
