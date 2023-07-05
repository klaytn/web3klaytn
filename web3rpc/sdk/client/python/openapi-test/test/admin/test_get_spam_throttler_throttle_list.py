from base.testing import KlaytnBaseTesting


class TestAdminGetSpamThrottlerThrottleList(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.get_spam_throttler_throttle_list()
        self.assertResponseSuccess()
