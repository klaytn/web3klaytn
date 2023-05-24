from base.testing import KlaytnBaseTesting


class TestDebugMutexProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "mutex.profile"
        self.seconds = 10

    def test_post(self):
        self.response = self.sdk.debug.mutex_profile(
            self.file, self.seconds
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.mutex_profile(self.file)
        self.assertErrorCodeMissingRequiredArgument()
