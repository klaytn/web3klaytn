from base.testing import KlaytnBaseTesting


class TestDebugSetBlockProfileRate(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.rate = 4

    def test_post(self):
        self.response = self.sdk.debug.set_block_profile_rate(
            self.rate
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.set_block_profile_rate()
        self.assertErrorCodeMissingRequiredArgument()
