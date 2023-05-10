from base.testing import KlaytnBaseTesting


class TestAdminSetSpamThrottlerWhiteList(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.get_spam_throttler_white_list()
        self.assertResponseSuccess()
