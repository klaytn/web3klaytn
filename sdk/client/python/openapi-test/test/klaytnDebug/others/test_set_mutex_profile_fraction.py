from base.testing import KlaytnBaseTesting


class TestDebugSetMutexProfileFraction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.rate = 2

    def test_post(self):
        debug_response = self.sdk.debug.set_mutex_profile_fraction(
            self.rate
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.set_mutex_profile_fraction()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
