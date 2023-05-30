from base.testing import KlaytnBaseTesting


class TestAdminSetSpamThrottlerWhiteList(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = ["0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5"]

    def test_post(self):
        self.response = self.sdk.admin.set_spam_throttler_white_list(
            self.address
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.admin.set_spam_throttler_white_list()
        self.assertErrorCodeMissingRequiredArgument()
