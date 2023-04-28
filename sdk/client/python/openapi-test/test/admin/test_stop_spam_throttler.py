from base.testing import KlaytnBaseTesting


class TestAdminStopSpamThrottler(KlaytnBaseTesting):

    def test_post(self):
        admin_response = self.sdk.admin.stop_spam_throttler()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
