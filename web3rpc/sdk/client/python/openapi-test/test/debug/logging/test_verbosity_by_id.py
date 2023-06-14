from base.testing import KlaytnBaseTesting


class TestDebugVerbosityByID(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.verId = 1
        self.level = 3

    def test_post(self):
        self.response = self.w3.debug.verbosity_by_id(
            self.verId, self.level
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.verbosity_by_id(self.verId)

