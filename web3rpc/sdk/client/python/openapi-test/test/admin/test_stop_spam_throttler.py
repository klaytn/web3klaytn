from base.testing import KlaytnBaseTesting


class TestAdminStopSpamThrottler(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.stop_spam_throttler()
        self.assertResponseSuccess()
