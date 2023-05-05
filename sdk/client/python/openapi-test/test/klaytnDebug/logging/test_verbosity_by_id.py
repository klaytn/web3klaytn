from base.testing import KlaytnBaseTesting


class TestDebugVerbosityByID(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.verId = 1
        self.level = 3

    def test_post(self):
        debug_response = self.sdk.debug.verbosity_by_id(
            self.verId, self.level
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.verbosity_by_id(self.verId)

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
