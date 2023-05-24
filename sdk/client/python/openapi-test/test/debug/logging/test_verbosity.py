from base.testing import KlaytnBaseTesting


class TestDebugVerbosity(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.level = 3

    def test_post(self):
        self.response = self.sdk.debug.verbosity(
            self.level
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.verbosity()
        self.assertErrorCodeMissingRequiredArgument()
