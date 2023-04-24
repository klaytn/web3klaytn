from base.testing import KlaytnBaseTesting


class TestAdminStartSpamThrottler(KlaytnBaseTesting):

    def test_post(self):
        admin_response = self.sdk.admin.start_spam_throttler()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)