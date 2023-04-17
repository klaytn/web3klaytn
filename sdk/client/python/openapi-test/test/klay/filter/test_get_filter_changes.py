from base.testing import KlaytnBaseTesting
from base.klay import create_new_filter


class TestGetFilterChanges(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.quantity = create_new_filter()

    def test_post(self):

        klay_response = self.sdk.klay.get_filter_changes(
            self.quantity
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.get_filter_changes()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
