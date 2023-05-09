from base.testing import KlaytnBaseTesting


class TestStartCPUProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "block.profile1"

    def test_post(self):
        self.response = self.sdk.debug.start_cpu_profile(
            self.file
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.start_cpu_profile()
        self.assertErrorCodeMissingRequiredArgument()
