from base.testing import KlaytnBaseTesting


class TestDebugSetMutexProfileFraction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.rate = 2

    def test_post(self):
        self.response = self.sdk.debug.set_mutex_profile_fraction(
            self.rate
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.set_mutex_profile_fraction()
        self.assertErrorCodeMissingRequiredArgument()
