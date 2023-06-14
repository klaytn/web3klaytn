from base.testing import KlaytnBaseTesting


class TestDebugSetGCPercent(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.percent = 100

    def test_post(self):
        self.response = self.w3.debug.set_gc_percent(
            self.percent
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.set_gc_percent()

