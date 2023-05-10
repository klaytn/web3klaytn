from base.testing import KlaytnBaseTesting


class TestAdminStartSpamThrottler(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.start_spam_throttler()
        self.assertResponseSuccess()
