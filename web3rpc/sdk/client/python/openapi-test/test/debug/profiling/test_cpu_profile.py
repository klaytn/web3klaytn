from base.testing import KlaytnBaseTesting


class TestCPUProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "block.profile"
        self.seconds = 10

    def test_post(self):
        self.response = self.sdk.debug.cpu_profile(
            self.file, self.seconds
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.cpu_profile()
        self.assertErrorCodeMissingRequiredArgument()
