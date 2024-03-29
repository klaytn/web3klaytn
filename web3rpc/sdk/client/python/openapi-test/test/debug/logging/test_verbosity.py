from base.testing import KlaytnBaseTesting


class TestDebugVerbosity(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.level = 3

    def test_post(self):
        self.response = self.w3.debug.verbosity(
            self.level
        )
        self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.verbosity()

