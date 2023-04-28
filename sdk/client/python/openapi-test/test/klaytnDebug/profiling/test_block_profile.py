from base.testing import KlaytnBaseTesting


class TestDebugBlockProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "block.profile"
        self.seconds = 10

    def test_post(self):
        debug_response = self.sdk.debug.block_profile(
            self.file, self.seconds
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.block_profile(self.file)

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
