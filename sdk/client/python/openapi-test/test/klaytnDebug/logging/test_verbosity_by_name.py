from base.testing import KlaytnBaseTesting


class TestDebugVerbosityByName(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.name = "API"
        self.level = 3

    def test_post(self):
        debug_response = self.sdk.debug.verbosity_by_name(
            self.name, self.level
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.verbosity_by_name(self.name)

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
