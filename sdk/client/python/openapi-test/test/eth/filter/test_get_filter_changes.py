from base.testing import KlaytnBaseTesting
from base.eth import create_new_filter


class TestGetFilterChanges(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.quantity = create_new_filter()

    def test_post(self):
        eth_response = self.sdk.eth.get_filter_changes(
            self.quantity,
        )

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        eth_response = self.sdk.eth.get_filter_changes()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
