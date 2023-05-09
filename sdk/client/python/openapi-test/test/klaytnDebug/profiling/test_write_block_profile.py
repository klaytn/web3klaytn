from base.testing import KlaytnBaseTesting


class TestDebugWriteBlockProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "block.profile"

    def test_post(self):
        self.response = self.sdk.debug.write_block_profile(
            self.file
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.write_block_profile()
        self.assertErrorCodeMissingRequiredArgument()
