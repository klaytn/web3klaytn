from base.testing import KlaytnBaseTesting


class TestAdminSetSpamThrottlerWhiteList(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = ["0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5"]

    def test_post(self):
        self.response = self.w3.geth.admin.set_spam_throttler_white_list(
            self.address
        )
        if self.response is not None:
            self.assertIsInstance(self.response, str)
        else:
            self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.geth.admin.set_spam_throttler_white_list()

