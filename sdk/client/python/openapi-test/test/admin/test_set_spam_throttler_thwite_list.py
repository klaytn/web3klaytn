from base.testing import KlaytnBaseTesting


class TestAdminSetSpamThrottlerWhiteList(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = ["0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5"]

    def test_post(self):
        admin_response = self.sdk.admin.set_spam_throttler_white_list(
            self.address
        )

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        admin_response = self.sdk.admin.set_spam_throttler_white_list()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
