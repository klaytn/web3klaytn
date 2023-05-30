from base.testing import KlaytnBaseTesting


class TestAdminGetSpamThrottlerThrottleList(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.get_spam_throttler_throttle_list()
        self.assertResponseSuccess()
