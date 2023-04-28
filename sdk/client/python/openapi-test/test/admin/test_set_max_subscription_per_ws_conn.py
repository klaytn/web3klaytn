from base.testing import KlaytnBaseTesting


class TestAdminSetMaxSubscriptionPerWSConn(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.limit = 5

    def test_post(self):
        admin_response = self.sdk.admin.set_max_subscription_per_ws_conn(
            self.limit
        )

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        admin_response = self.sdk.admin.set_max_subscription_per_ws_conn()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
