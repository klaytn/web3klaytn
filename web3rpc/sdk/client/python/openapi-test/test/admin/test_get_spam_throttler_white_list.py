from base.testing import KlaytnBaseTesting


class TestAdminSetSpamThrottlerWhiteList(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.get_spam_throttler_white_list()
        self.assertTrue(len(self.response) >= 0)
