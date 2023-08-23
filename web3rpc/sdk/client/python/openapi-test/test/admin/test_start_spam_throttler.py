from base.testing import KlaytnBaseTesting


class TestAdminStartSpamThrottler(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.start_spam_throttler()
        if self.response is not None:
            self.assertIsInstance(self.response, str)
        else:
            self.assertIsNone(self.response)
