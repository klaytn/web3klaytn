from base.testing import KlaytnBaseTesting


class TestWriteMutexProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "mutex.profile"

    def test_post(self):
        self.response = self.sdk.debug.write_mutex_profile(
            self.file
        )

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.write_mutex_profile()
        self.assertErrorCodeMissingRequiredArgument()
