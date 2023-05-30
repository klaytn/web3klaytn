from base.testing import KlaytnBaseTesting


class TestLockAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xfa415bb3e6231f488ff39eb2897db0ef3636dd32"

    def test_post(self):
        self.response = self.sdk.personal.lock_account(
            self.address
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.personal.lock_account()
        self.assertErrorCodeMissingRequiredArgument()
