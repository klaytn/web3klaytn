from base.testing import KlaytnBaseTesting


class TestAdminStartSpamThrottler(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.start_spam_throttler()
        self.assertResponseSuccess()
