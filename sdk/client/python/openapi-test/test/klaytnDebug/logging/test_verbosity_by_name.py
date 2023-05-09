from base.testing import KlaytnBaseTesting


class TestDebugVerbosityByName(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.name = "API"
        self.level = 3

    def test_post(self):
        self.response = self.sdk.debug.verbosity_by_name(
            self.name, self.level
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.verbosity_by_name(self.name)
        self.assertErrorCodeMissingRequiredArgument()
