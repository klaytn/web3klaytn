from base.testing import KlaytnBaseTesting
from base.eth import create_new_filter


class TestGetFilterChanges(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.quantity = create_new_filter()

    def test_post(self):
        self.response = self.sdk.eth.get_filter_changes(
            self.quantity,
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_filter_changes()
        self.assertErrorCodeMissingRequiredArgument()
