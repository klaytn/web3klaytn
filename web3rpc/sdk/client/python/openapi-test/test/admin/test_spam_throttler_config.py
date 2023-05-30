from base.testing import KlaytnBaseTesting


class TestAdminSpamThrottlerConfig(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.spam_throttler_config()
        self.assertResponseSuccess()
