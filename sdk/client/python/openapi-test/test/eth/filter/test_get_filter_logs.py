from base.testing import KlaytnBaseTesting
from base.klay import create_new_filter


class TestGetFilterLogs(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.quantity = create_new_filter()

    def test_post(self):
        klay_response = self.sdk.eth.get_filter_logs(
            self.quantity
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.eth.get_filter_logs()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
