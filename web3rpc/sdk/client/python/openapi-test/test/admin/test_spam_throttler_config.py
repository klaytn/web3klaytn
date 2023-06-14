from base.testing import KlaytnBaseTesting


class TestAdminSpamThrottlerConfig(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.spam_throttler_config()
        self.assertResponseSuccess()
