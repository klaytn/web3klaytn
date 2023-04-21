from base.testing import KlaytnBaseTesting


class TestAdminGetSpamThrottlerThrottleList(KlaytnBaseTesting):

    def test_post(self):
        admin_response = self.sdk.admin.get_spam_throttler_throttle_list()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
