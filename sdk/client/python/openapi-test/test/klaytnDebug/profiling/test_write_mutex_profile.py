from base.testing import KlaytnBaseTesting


class TestWriteMutexProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "mutex.profile"

    def test_post(self):
        debug_response = self.sdk.debug.write_mutex_profile(
            self.file
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.write_mutex_profile()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
